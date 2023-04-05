const express = require("express");
const router = express.Router();
const { Graph } = require("../db/models/model");

// router.get('/', (req, res) => {
//     res.send('data');
// })

router.get('/', async (req, res) => {
    try {
        const graph = await Graph.find();
        console.log(graph);
        res.status(200).json(graph);
    } catch (err) {
        console.error(err);
        res.send('그래프 조회가 실패하였습니다.');
    }
});

// '/objectid' 값 넣었을 때 구 별로 추출하는 get api
// router.get('/:GuId', async (req, res) => {
//     try {
//         const GuId = req.params.GuId;
//         const graph = await Graph.findOne({_id: GuId}, '강동구');
//         console.log(graph.toJSON()['강동구']);

//         res.status(200).json(graph);
//     } catch(err) {
//         console.error(err);
//         res.send('그래프 조회가 실패하였습니다.');
//     }
// });


module.exports = router;