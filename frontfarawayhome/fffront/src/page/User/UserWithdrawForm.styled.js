import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
`;

export const H2 = styled.h2`
  text-align: center;
  margin-bottom: 70px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 50px;

  color: #000000;
`;

export const H3 = styled.h3`
  text-align: center;
  margin-bottom: 90px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 54px;

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

export const Div = styled.div`
  display: flex;
  justify-content: left;
  padding-top: 0.2%;
  padding-left: 10px;
  box-sizing: border-box;
  margin-bottom: 40px;
  width: 400px;
  height: 35px;
  font-size: 18px;
  background: #ffffff;
  border: 1px solid #000000;
`;

export const Input = styled.input`
  box-sizing: border-box; /* 이거 때문에 가로 세로 정렬배치됨 */
  margin-bottom: 20px;
  padding-left: 10px;
  width: 400px;
  height: 35px;
  font-size: 18px;
  background: #ffffff;
  border: 1px solid #000000;
`;
export const ValidationBigBox = styled.div`
  height: 40px;
`
export const ValidationNoneBox = styled.div`
  display: none;
`
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
`
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
  width: 400px;
  margin-bottom: 15px;
  text-align: left;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  height: 35px;

  color: #000000;
`;
