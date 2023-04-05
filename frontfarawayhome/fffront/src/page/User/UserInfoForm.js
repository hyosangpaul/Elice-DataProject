/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { userApi } from "../../api/api";
import { Form, H2, Span, Div } from "./UserInfoForm.styled";
import { hasAccessToken } from "../../utils/tokenFunction";
import LoginForm from "../Login/LoginForm";
import { Navigate } from "react-router-dom";

const UserInfoForm = () => {
  // ~
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    role: "",
  });

  // // ! 여기 검토 바랍니다.
  // if (hasAccessToken() === false) {
  //   navigate(ROUTE.LOGINFORM.link);
  //   return;
  // }
  if (hasAccessToken() === false) return <LoginForm from="UserInfoForm" />;

  useEffect(() => {
    async function fetchData() {
      const result = await userApi.getInfo();
      if (result === "fail") {
        return <Navigate to="/"/>
      } else {
        setForm(result);
      }
    }
    fetchData();
  }, []);

  return (
    <Form>
      <H2>마이 페이지(유저 정보)</H2>
      <Div htmlFor="email">이름</Div>
      <Span name="email">{form.name}</Span>
      <Div htmlFor="phoneNumber">핸드폰 번호</Div>
      <Span name="phoneNumber">{form.phoneNumber}</Span>
      <Div htmlFor="address">거주지</Div>
      <Span name="address">{form.address}</Span>
    </Form>
  );
};

export default UserInfoForm;
