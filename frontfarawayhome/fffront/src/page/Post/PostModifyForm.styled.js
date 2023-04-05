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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;
export const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;

  border: 1px solid orange;
`;
export const PostDiv = styled.div`
  margin-top: 3%;
  box-sizing: border-box;
  padding: 0.1% 0.1% 0.1% 3%;
  width: 80%;
  height: 40px;
  border: 1px solid skyblue;
  font-size: 25px;
`;

export const H2 = styled.h2`
  text-align: center;
  margin-bottom: 0px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 50px;

  color: #000000;
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

export const Input = styled.input`
  box-sizing: border-box; /* 이거 때문에 가로 세로 정렬배치됨 */
  margin-bottom: 50px;
  padding-left: 10px;
  width: 400px;
  height: 35px;
  font-size: 18px;
  background: #ffffff;
  border: 1px solid #000000;
`;
export const ValidationBigBox = styled.div`
  height: 40px;
`;
export const ValidationNoneBox = styled.div`
  display: none;
`;
export const ValidationBox = styled.div`
  display: block;
  margin-top: 0px;
  width: 400px;
  text-align: left;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: red;
`;
export const Button = styled.button`
  width: 300px;
  height: 50px;
  margin-bottom: 20px;

  background: rgba(44, 65, 251, 0.73);
  border-radius: 30px;
  border-color: rgba(44, 65, 251, 0.73);
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
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
