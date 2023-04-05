// 로그인을 처리하는 핸들러
const express = require("express");
const router = express.Router();
const { User, Post, Counter, Graph } = require("../db/models/model");
// jwt 생성 모듈
const buildResponse = require("../utils/buildResponse");
const checkTokenWithRefresh = require("../utils/checkTokenWithRefresh");

// 게시물 탭용 지역데이터 보여주기
router.get('/districts', async (req, res, next) => {
  try {
      const graph = await Graph.find();
      res.status(200).json(buildResponse(graph, 200));
  } catch (err) {
      console.error(err);
      next(err);
  }
});

// 게시물 보여주기
router.get("/", async (req, res, next) => {
  const posts = await Post.find({}); // 배열로 나옴.
  res.status(200).json(buildResponse(posts, 200));
});

// 게시물 작성
router.post("/add", checkTokenWithRefresh, async (req, res, next) => {
  const userFound = await User.findOne({ email: req.user.email });
  
  const posts = await Post.find({ name : req.body.selectedDistrict });
  if (posts.length === 0) {
    await Counter.updateOne({ name : req.body.selectedDistrict}, { $set : { totalPosts : 0 } })
  }
  const counter = await Counter.findOne({ name : req.body.selectedDistrict })
  const totalCount = counter.totalPosts; // 0부터 시작
  const dataInserted = {
    name: req.body.selectedDistrict,
    count: totalCount + 1,
    writer_id: userFound._id,
    writerName: userFound.name,
    email: userFound.email,
    title: req.body.title,
    role: userFound.role,
  };
  await Post.create(dataInserted);
  await Counter.updateOne({ name: counter.name }, { $inc: { totalPosts: 1 } });
  res.status(200).json(buildResponse(null, 200))
  console.log("게시물 작성 완료");
});

// 게시물 삭제
router.delete("/delete", checkTokenWithRefresh, async (req, res, next) => {
  try {
    const userFound = await User.findOne({ email: req.user.email }); // 토큰으로 유저를 찾음.
    if (userFound._id.toString() === req.body.writer_id) {
      await Post.deleteOne({ updatedAt : req.body.updatedAt });
      res.status(204).json(buildResponse(null, 204));
      console.log("게시물 삭제 성공");
    }
  } catch (err) {
    res.status(400).json(buildResponse(null, 400, err));
    console.log("게시물 삭제 실패");
  }
});


// 게시물 갱신
router.put("/modify", checkTokenWithRefresh, async (req, res, next) => {
  const userFound = await User.findOne({ email: req.user.email });
  const postFound = await Post.findOne({ writer_id: userFound._id });
  const { title } = req.body;
  if (userFound._id === postFound.writer_id) {
    await Post.updateOne({ $set: { title, role: userFound.role } });
    req.status(200).json(buildResponse(null, 200));
  } else {
    req.status(400).json(buildResponse(null, 400));
  }
  
});


module.exports = router;
