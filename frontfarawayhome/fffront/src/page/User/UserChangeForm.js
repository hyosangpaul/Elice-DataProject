/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { userApi } from "../../api/api";
import { Form, H2, H3, Label, Input, Select, Button, ValidationBigBox, ValidationBox, ValidationNoneBox } from "./UserChangeForm.styled";
import { hasAccessToken } from "../../utils/tokenFunction";
import LoginForm from "../Login/LoginForm";
import { Navigate } from "react-router-dom";

const UserChangeForm = () => {
  if (hasAccessToken() === false) return <LoginForm from="/UserChangeForm" />;
  // ~
  const [form, setForm] = useState({
    inputEmail: "",
    inputPw: "",
    inputName: "",
    inputPhoneNumber: "",
    selectedDistrict: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target; // input 태그의 name속성(name을 state명이랑 같게 해야) 및 value속성을 뽑음
    setForm((form) => ({
      ...form, // state(객체형) 변경법
      [name]: value, // 표현법이 신기(대괄호 붙임)
    }));
  };

  // ~
  // 1단계 : 유효성 검사(형식 체크)
  const validateInputEmail = (inputEmail) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i;
    return emailRegex.test(inputEmail);
  };
  const validateInputPw = (inputPw) => {
    const pwRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return pwRegex.test(inputPw);
  };
  const validateInputName = (inputName) => {
    const nameRegex = /^[가-힣]{2,}$/u;
    return nameRegex.test(inputName);
  };
  const validateInputPhoneNumber = (inputPhoneNumber) => {
    const phoneNumberRegex = /^\d{11}$/;
    return phoneNumberRegex.test(inputPhoneNumber);
  };

  // 2단계 : 유효성 검사 함수로 정리하기(true?)
  const isInputEmailValid = validateInputEmail(form.inputEmail);
  const isInputPwValid = validateInputPw(form.inputPw);
  const isInputNameValid = validateInputName(form.inputName);
  const isInputPhoneNumberValid = validateInputPhoneNumber(
    form.inputPhoneNumber
  );
  const isInputConfirmPwValid = form.inputPw === form.inputConfirmPw;

  // ! 지역구 이름 가져오기
  // let districts;
  // useEffect(() => {
  //   districts = districtsApi.getData();
  // }, []);

  // ~
  // post로 유저 데이터 변경
  const onSubmit = async (e) => {
    e.preventDefault();
    if (isInputEmailValid === false && form.inputEmail !== "") {
      alert("올바른 이메일을 입력해주세요.");
    }
    if (isInputPwValid === false && form.inputPw !== "") {
      alert("영문 대소문자, 숫자를 적어도 1개씩 포함 8자 이상 입력해주세요.");
    }
    if (isInputNameValid === false && form.inputName !== "") {
      alert("두 글자 이상의 한글로 이름을 입력해주세요.");
    }
    if (isInputPhoneNumberValid === false && form.inputPhoneNumber !== "") {
      alert("11자리의 숫자로 핸드폰 번호를 입력해주세요.");
    }
    const result = await userApi.modify(form);
    if (result === "success") {
      return <Navigate to="/"/>
    }
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <H2>마이 페이지(유저 정보 변경)</H2>
        <H3>변경하실 정보만 입력바랍니다.</H3>
        <Label htmlFor="inputEmail">이메일</Label>
        <Input
          type="text"
          id="inputEmail"
          name="inputEmail"
          style={{ marginBottom: "0px" }}
          onChange={handleForm}
          placeholder="이메일을 입력해주세요."
        />
        <ValidationBigBox>
          {
              isInputEmailValid === true || form.inputEmail.length == 0 ? <ValidationNoneBox/> : <ValidationBox>이메일 형식이 맞지 않습니다.</ValidationBox>
          }
        </ValidationBigBox>
        <Label htmlFor="inputPw">비밀번호</Label>
        <Input
          type="text"
          id="inputPw"
          name="inputPw"
          style={{ marginBottom: "0px" }}
          onChange={handleForm}
          placeholder="비밀번호를 입력해주세요."
        />
        <ValidationBigBox>
          {
              isInputPwValid === true || form.inputPw.length == 0 ? <ValidationNoneBox/> : <ValidationBox>영문 대소문자, 숫자 포함 8자 이상 입력해주세요.</ValidationBox>
          }
        </ValidationBigBox>
        <Label htmlFor="inputName">이름</Label>
        <Input
          type="text"
          id="inputName"
          name="inputName"
          style={{ marginBottom: "0px" }}
          onChange={handleForm}
          placeholder="이름을 입력해주세요."
        />
        <ValidationBigBox>
          {
              isInputNameValid === true || form.inputName.length == 0 ? <ValidationNoneBox/> : <ValidationBox>이름 형식이 맞지 않습니다.</ValidationBox>
          }
        </ValidationBigBox>
        <Label htmlFor="inputPhoneNumber">핸드폰 번호</Label>
        <Input
          type="text"
          id="inputPhoneNumber"
          name="inputPhoneNumber"
          style={{ marginBottom: "0px" }}
          onChange={handleForm}
          placeholder="핸드폰 번호를 입력해주세요."
        />
        <ValidationBigBox>
          {
              isInputPhoneNumberValid === true || form.inputPhoneNumber.length == 0 ? <ValidationNoneBox/> : <ValidationBox>핸드폰 번호 형식이 맞지 않습니다.</ValidationBox>
          }
        </ValidationBigBox>
        <Label htmlFor="selectedDistrict">주소</Label>
        <Select
          id="selectedDistrict"
          name="selectedDistrict"
          placeholder="거주하는 지역구를 골라주세요."
          onChange={handleForm}
        >
          <option value="">선택해주세요</option>
          {["강서구", "양천구", "강남구"].map((elem, i) => (
            <option key={i}>{elem}</option>
          ))}
        </Select>
        <Button style={{ marginTop: "40px" }} type="submit">
          변 경 하 기
        </Button>
      </Form>
    </div>
  );
};

export default UserChangeForm;
