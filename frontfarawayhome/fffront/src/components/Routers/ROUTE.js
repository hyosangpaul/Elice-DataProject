import Home from "../../page/Home";
import LoginForm from "../../page/Login/LoginForm";
import RegisterForm from "../../page/Register/RegisterForm";
import PostForm from "../../page/Post/PostForm";
import PostWriteForm from "../../page/Post/PostWriteForm";
import PostModifyForm from "../../page/Post/PostModifyForm";
import UserChangeForm from "../../page/User/UserChangeForm";
import UserWithdrawForm from "../../page/User/UserWithdrawForm";
import UserInfoForm from "../../page/User/UserInfoForm";
import UserMain from "../../page/User/UserMain";

export const ROUTE = {
  HOME: {
    path: "/",
    link: "/",
    element: Home,
    name:'홈'
  },
  LOGINFORM: {
    path: "/LoginForm",
    link: "/LoginForm",
    element: LoginForm,
    name:'로그인'
  },
  REGISTERFORM: {
    path: "/RegisterForm",
    link: "/RegisterForm",
    element: RegisterForm,
    name:'회원가입'
  },
  POSTFORM: {
    path: "/PostForm",
    link: "/PostForm",
    element: PostForm,
    name:'게시판'
  },
  POSTWRITEFORM: {
    path: "/PostWriteForm",
    link: "/PostWriteForm",
    element: PostWriteForm,
    name:'게시글 작성'
  },
  POSTMODIFYFORM: {
    path: "/PostModifyForm",
    link: "/PostModifyForm",
    element: PostModifyForm,
    name:'게시글 수정'
  },
  USERINFOFORM: {
    path: "/UserInfoForm",
    link: "/UserInfoForm",
    element: UserInfoForm,
    name:'마이페이지(유저 정보)'
  },
  USERCHANGEFORM: {
    path: "/UserChangeForm",
    link: "/UserChangeForm",
    element: UserChangeForm,
    name:'마이 페이지(유저 정보 변경)'
  },
  USERWITHDRAWFORM: {
    path: "/UserWithdrawForm",
    link: "/UserWithdrawForm",
    element: UserWithdrawForm,
    name:'마이 페이지(회원 탈퇴)'
  },
  USERMAIN: {
    path: "/UserMain",
    link: "/UserMain",
    element: UserMain,
    name:'마이 페이지'
  },
};

export const ROUTE_ARR = Object.values(ROUTE);