import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { postsApi, districtsApi } from "../../api/api";
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
  Select,
} from "./PostWriteForm.styled";

function PostWriteForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [districts, setDistricts] = useState([]);
  const location = useLocation();
  const tab = location?.state?.tab ?? null;

  useEffect(() => {
    async function getDistricts() {
      const data = await districtsApi.getData();
      setDistricts(data);
    }
    getDistricts();
  }, []);

  if (hasAccessToken() === false) return <LoginForm from="/PostWriteForm" />;

  const handleForm = (e) => {
    const { name, value } = e.target;
    const selectedDistrict = (tab === null ? null : districts[tab]);
    if (selectedDistrict !== null) {
      setForm({selectedDistrict});
    }
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await postsApi.postPost(form);
  };

  return (
    <>
      <All>
        <Wrapper>
          <H2>
            {tab !== null
              ? `${districts[tab]} 게시판 작성`
              : "게시판 작성"}
          </H2>
          <Form onSubmit={onSubmit}>
            <Label>제목</Label>
            <Input
              type="text"
              id="title"
              name="title"
              onChange={handleForm}
              placeholder="제목을 입력해주세요."
            />

            {tab !== null ? null : (
              <>
                <Label htmlFor="selectedDistrict">주소</Label>
                <Select
                  id="selectedDistrict"
                  name="selectedDistrict"
                  placeholder="거주하는 지역구를 골라주세요."
                  onChange={handleForm}
                  required
                >
                  <option value="">선택해주세요</option>
                  {districts.map((elem, i) => (
                    <option key={i}>{elem}</option>
                  ))}
                </Select>
              </>
            )}

            <Button type="submit">작성</Button>
            <Button onClick={()=>{navigate('/PostForm')}}>게시판 가기</Button>
          </Form>
        </Wrapper>
      </All>
    </>
  );
}

export default PostWriteForm;
