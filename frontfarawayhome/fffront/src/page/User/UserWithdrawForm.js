/*eslint-disable*/
import React, { useState } from "react";
import { userApi } from "../../api/api";
import { Form, H2, Label, Input, Button, ValidationBigBox, ValidationBox, ValidationNoneBox } from "./UserWithdrawForm.styled";
import {
  hasAccessToken,
} from "../../utils/tokenFunction";
import { Navigate } from "react-router-dom";

const UserWithdrawForm = () => {
  // ~
  const [form, setForm] = useState({
    inputPw: "",
    inputConfirmPw: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };


  const isInputConfirmPwValid = form.inputPw === form.inputConfirmPw;

  // ~
  // post로 유저 데이터 변경
  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.inputPw === form.inputConfirmPw) {
      const result = await userApi.withdraw(form.inputPw);
      if (result === "success") {
        window.location.href = '/'
      }
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };
  
  if (hasAccessToken() === false) return <Navigate from="/UserWithdrawForm" to="/LoginForm"/>;

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <H2>마이 페이지(회원 탈퇴)</H2>
        <Label htmlFor="inputPw">비밀번호</Label>
        <Input
          type="text"
          id="inputPw"
          name="inputPw"
          onChange={handleForm}
          placeholder="비밀번호를 입력해주세요."
        />
        <Label htmlFor="inputConfirmPw">비밀번호 재입력</Label>
        <Input
          type="text"
          id="inputConfirmPw"
          name="inputConfirmPw"
          style={{ marginBottom: "0px" }}
          onChange={handleForm}
          placeholder="비밀번호를 재입력해주세요."
        />
        <ValidationBigBox>
          {
              isInputConfirmPwValid === true || form.inputConfirmPw.length == 0 ? <ValidationNoneBox/> : <ValidationBox>비밀번호가 일치하지 않습니다.</ValidationBox>
          }
        </ValidationBigBox>
        <Button style={{ marginTop: "40px" }} type="submit">
          탈 퇴 하 기
        </Button>
      </Form>
    </div>
  );
};

export default UserWithdrawForm;
