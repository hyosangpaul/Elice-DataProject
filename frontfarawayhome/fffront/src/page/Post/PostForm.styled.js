import styled from "styled-components";

export const All = styled.div`
  body {
    min-width: 0px;
    min-height: 0px;
    max-width: 2500px;
    max-height: 2000px;
    margin: auto; /* 가운데 정렬을 위해 필요한 코드 */
    overflow: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 75vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 75vh;
`;

export const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fdcb6e;
  padding: 10px 10px;
  width: 1860px;
  height: 650px;
  border: 4px solid #f8c291;
  border-bottom-left-radius: 30px; /* 왼쪽 하단 모서리를 둥글게 만듭니다. */
  border-bottom-right-radius: 50px;
  radius: 30px;
`;
export const PostDiv = styled.div`
  margin-top: 2%;
  box-sizing: border-box;
  padding: 0.1% 0.1% 0.1% 3%;
  width: 70%;
  height: 130px;
  background-color: #ffeaa7;
  border: 1px solid #f6b93b;
  border: 4px double #f6b93b;
  font-size: 10px;
  border-radius: 40px;
`;
export const PostSmallDiv = styled.div`
  text-align: right;
  box-sizing: border-box;
  width: 100%;
  height: 15px;
  font-size: 15px;
  padding-right: 1%;
  color: purple;
`;
export const PostSmallCountDiv = styled.div`
  text-align: left;
  box-sizing: border-box;
  width: 100%;
  height: 15px;
  font-size: 15px;
  color: purple;
`;
export const PostSmallTitleDiv = styled.div`
  text-align: left;
  padding-top: 1%;
  padding-left: 3%;
  box-sizing: border-box;
  width: 100%;
  height: 15px;
  font-size: 19px;
`;

export const H2 = styled.h2`
  text-align: center;
  padding: 0.5%;
  margin-bottom: 0.3%;
  background-color: #fab1a0;
  border: 0.2px solid #ff7675;
  border-radius: 30px;
  width: 20%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 50px;

  color: #d63031;
`;
export const Label = styled.label`
  width: 400px;
  margin-bottom: 15px;
  text-align: left;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 10px;

  color: #000000;
`;

export const PostButton = styled.button`
  width: 130px;
  height: 30px;

  background: #fa983a;
  border-radius: 30px;
  border-color: #fa983a;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
`;

export const Select = styled.select`
  width: 700px;
  margin-bottom: 15px;
  text-align: left;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 24px;
  height: 65px;

  color: #000000;
`;

export const Nav = styled.nav``;
export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fab1a0;
  color: white;
  margin: 0%;
  padding: 0%;
`;

export const Li = styled.li`
  display: inline-block;
  padding: 0.2%;
  width: 73px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  font-size: 15px;
  list-style-type: none;
  border: 0.2px solid #ff7675;
`;
export const LeftButton = styled.button`
  width: 130px;
  height: 30px;

  background: #ccae62;
  border-radius: 30px;
  border-color: #ccae62;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
`;
export const RightButton = styled.button`
  width: 130px;
  height: 30px;

  background: #ccae62;
  border-radius: 30px;
  border-color: #ccae62;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-top: 3%;
  width: 100%;
  height: 0px;
`;