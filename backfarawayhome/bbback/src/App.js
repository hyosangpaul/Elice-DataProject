const http = require("http");
const express = require("express");
const loader = require("./loader");
const config = require("./config");
const AppError = require("./misc/AppError");
const commonErrors = require("./misc/commonErrors");
const apiRouter = require("./router");

/// ---필요한 라우터 require ---
const loginRouter = require("./routers/login");
// const accountRouter = require("./routers/account");
const registerRouter = require("./routers/register");
const withdrawRouter = require("./routers/withdraw");
const modifyRouter = require("./routers/modify");
const userRouter = require("./routers/user");
const graphRouter = require("./routers/graph");
const postRouter = require("./routers/post");
// const districtsRouter = require("./routers/districts");
/// -------------------------------

  console.log("express application을 초기화합니다.");
  const expressApp = express();

  expressApp.use(express.json());

  // Health check API
  expressApp.get("/health", (req, res, next) => {
    res.json({
      status: "OK",
    });
  });

// ------ 라우터 등록 ------
app.use("/graph", graphRouter);
// app.use("/account", accountRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/withdraw", withdrawRouter);
app.use("/user", userRouter);
app.use("/modify", modifyRouter);
app.use("/post", postRouter);
// app.use("/districts", districtsRouter);
//--------------------------

  // 해당되는 URL이 없을 때를 대비한 미들웨어
  expressApp.use((req, res, next) => {
    next(
      new AppError(
        commonErrors.resourceNotFoundError,
        404,
        "Resource not found"
      )
    );
  });

  // 에러 핸들러 등록
  expressApp.use((error, req, res, next) => {
    console.log(error);
    res.statusCode = error.httpCode ?? 500;
    res.json({
      data: null,
      error: error.message,
    });
  });
  console.log("express application 준비가 완료되었습니다.");

  // express와 http.Server을 분리해서 관리하기 위함.
  const server = http.createServer(expressApp);

  const app = {
    start() {
      server.listen(config.port);
      server.on("listening", () => {
        console.log(`🚀 게시판 서버가 포트 ${config.port}에서 운영중입니다.`);
      });
    },
    stop() {
      console.log("🔥 서버를 중지 작업을 시작합니다.");
      this.isShuttingDown = true;
      return new Promise((resolve, reject) => {
        server.close(async (error) => {
          if (error !== undefined) {
            console.log(`- HTTP 서버 중지를 실패하였습니다: ${error.message}`);
            reject(error);
          }
          console.log("- 들어오는 커넥션을 더 이상 받지 않도록 하였습니다.");
          await loader.disconnectMongoDB();
          console.log("- DB 커넥션을 정상적으로 끊었습니다.");
          console.log("🟢 서버 중지 작업을 성공적으로 마쳤습니다.");
          this.isShuttingDown = false;
          resolve();
        });
      });
    },
    isShuttingDown: false,
    _app: expressApp,
  };

  return app;

module.exports = create;
