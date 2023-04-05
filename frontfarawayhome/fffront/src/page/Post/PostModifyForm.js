import React, { useState } from "react";
import { postsApi } from "../../api/api";
import { hasAccessToken } from "../../utils/tokenFunction";
import LoginForm from "../Login/LoginForm";
import {
  All,
  Wrapper,
  H2,
  Button,
  Form,
  Label,
  Input,
} from "./PostModifyForm.styled";

function PostModifyForm(props) {

  const [form, setForm] = useState({});

  if (hasAccessToken() === false) return <LoginForm from="/PostModifyForm" />;
  
  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await postsApi.modifyPost({...props.elem, title : form.title});
  };

  return (
    <>
      <All>
        <Wrapper>
          <H2>게시글 수정</H2>
          <Form onSubmit={onSubmit}>
            <Label>제목</Label>
            <Input
              type="text"
              id="title"
              name="title"
              onChange={handleForm}
              placeholder="제목을 입력해주세요."
            />
            <Button type="submit">수정</Button>
          </Form>
        </Wrapper>
      </All>
    </>
  );
}

export default PostModifyForm;
