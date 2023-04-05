import styled from "styled-components";

export const Sidebarcontent = styled.div`
  display: block;
  border-right: 5px solid #808080;
  overflow: auto;
  height: 100vh;
  width: 40%;
  right: auto;
  top: 7.4%;
  transition: 1s ease;
  /* 정훈 - Click으로 on, off로 줄예정 */
  /* &.open {
    right: 0;
    transition: 0.5s ease;
  } */
`;

export const H1SC = styled.h1`
  text-align : center;
`

export const H1SC2 = styled.h1`
  text-align : center;
  margin-top : 10%
`

export const H2SC = styled.h2`
  text-align : center;
`

export const ImgSC = styled.img`
  padding : 5em;
  width : 60%;
`