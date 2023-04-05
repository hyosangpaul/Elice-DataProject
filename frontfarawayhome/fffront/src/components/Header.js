/*eslint-disable*/
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// 20220314 이효상 ROUTE import
import { ROUTE, ROUTE_ARR } from "../../src/components/Routers/ROUTE";
import { removeAccessToken, removeRefreshToken } from "../utils/tokenFunction";
import logo from "../img/farawayhome.png";

const Header = () => {
  ROUTE_ARR.find((el) => el.path === location.pathname);
  const TokenCheck = localStorage.getItem('accessToken');

  return (
    //  지도로인해 Header가 가려지는 것을 막기위해 inlineStyle추가
    <div>
      <Container>
        <NavLink to={ROUTE.HOME.link}>
          {/* <LogoStyled> */}
          <ImgSC src={logo} alt="FarAwayHome" style={{ height: "7.4vh", width:"6.7vw", left: "20%"}} />
          {/* </LogoStyled> */}
        </NavLink>

        <NavStyled>
          <ButtonStyled>
            <NavLink to={ROUTE.POSTFORM.link}>게시판</NavLink>
            {TokenCheck !== null ? <></> : <NavLink to={ROUTE.LOGINFORM.link}>로그인</NavLink> }
            {TokenCheck !== null ? <></> : <NavLink to={ROUTE.REGISTERFORM.link}>회원가입</NavLink> }
            {TokenCheck !== null ? <NavLink to={ROUTE.USERMAIN.link}>
              마이 페이지
            </NavLink> : <></> }
            {TokenCheck !== null ? <NavLink
              onClick={() => {
                removeAccessToken();
                removeRefreshToken();
                window.location.href = '/'
                alert('로그아웃 되었습니다.')
              }}
            >
              로그아웃
            </NavLink> : <></> }
          </ButtonStyled>
        </NavStyled>
      </Container>
    </div>
  );
};

// 스타일 영역
const Container = styled.div`
  display: flex;
  height: 8em;
  background-color: rgba(44, 65, 251, 0.65);
`;

// const LogoStyled = styled.div`
//   position: fixed;
//   /* width: 10%;
//   height: 10%; */
// & img {
//     width: 1000px;
//     height: 100px;
//   }
// `;

//  네비게이션 스타일
const NavStyled = styled.div`
  align-self: center;
  list-style-type: none;
  margin-left: auto;
`;

const ImgSC = styled.img`
  padding : 2em;
`

const ButtonStyled = styled.div`
  & a {
    padding: 1em;
    text-decoration: none;
    color: black;
    background: none;
    border: none;
    background-color: rgba(44, 65, 251, 0);
    border-radius: 10%;
    pointer-events: painted;
    margin-right: 1em;
    font-size: large;
    font-weight: bolder;
    :hover {
      background-color: #ffffff;
      cursor: pointer;
    }
  }
`;
export default Header;
