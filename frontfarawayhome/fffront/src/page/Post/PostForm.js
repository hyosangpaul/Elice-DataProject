import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postsApi, districtsApi } from "../../api/api";
import {
  All,
  Wrapper,
  Li,
  H2,
  PostBox,
  PostDiv,
  PostSmallDiv,
  PostSmallCountDiv,
  PostSmallTitleDiv,
  PostButton,
  Nav,
  Ul,
  LeftButton,
  RightButton,
  Div,
} from "./PostForm.styled";

function PostForm() {
  const [tab, setTab] = useState(0);
  const [districts, setDistricts] = useState([]);
  const [fadeArray, setFadeArray] = useState(
    new Array(districts.length).fill(false)
  );
  const [index, setIndex] = useState(0);
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const getDistrictsData = async () => {
      const data = await districtsApi.getData();
      console.log(data)
      setDistricts(data);
    };
    getDistrictsData();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await postsApi.getPosts();
        const arr = [];
        for (let post of posts) {
          // of을 써야 obj에서 value가 나옴. in은 key임.
          if (post.name === `${districts[tab]}`) {
            arr.push(post);
          }
        }
        setForms(arr);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, [forms]);

  const handleStyle = (i) => {
    if (i === tab) {
      return { backgroundColor: "#e84393" };
    } else {
      return { backgroundColor: "#fab1a0" };
    }
  };

  return (
    <>
      <All>
        <Wrapper>
          <H2>{districts[tab]} 게시판</H2>
          <Nav>
            <Ul>
              {districts.map((elem, i) => {
                return (
                  <Li
                    style={handleStyle(i)}
                    onClick={() => {
                      const newFade = [...fadeArray];
                      newFade[i] = !newFade[i];
                      setFadeArray(newFade);
                      setTab(i);
                    }}
                    key={i}
                  >
                    {elem}
                  </Li>
                );
              })}
            </Ul>
          </Nav>
          <TabContent
            forms={forms}
            districts={districts}
            tab={tab}
            index={index}
          />
        </Wrapper>
        <Div>
          <LeftButton
            onClick={() => {
              if (index >= Math.ceil(Math.floor(forms.length/3))) {setIndex(Math.ceil(Math.floor(forms.length/3))-1)}
              if(1 <= index){
                setIndex(index-1)
              }else{
                setIndex(0)
              }
            }}
          >
            이전
          </LeftButton>
          <RightButton
            onClick={() => {
              if (index < 0) {setIndex(0)} 
              if(index < Math.ceil(Math.floor(forms.length/3))-1){
                setIndex(index+1)
              }else{
                setIndex(forms.length%3>0 ? Math.ceil(Math.floor(forms.length/3)) : index)
              }
            }}
          >
            다음
          </RightButton>
        </Div>
      </All>
    </>
  );
}

function TabContent({ forms, tab, index }) {
  const navigate = useNavigate();

  // const onSubmitModify = (elem) => {
  //   return (
  //     <>
  //       <PostModifyForm elem={elem} />
  //     </>
  //   );

  // };

  const onSubmitDelete = async (elem) => {
    await postsApi.deletePost(elem);
  };

  return (
    <>
      <PostBox>
        <div
          style={{
            display: "flex",
            "justify-content": "right",
            width: "100%",
            "padding-top": "0.2%",
          }}
        >
          <PostButton
            onClick={() => {
              navigate("/PostWriteForm", {
                state: {
                  tab: tab,
                },
              });
            }}
          >
            글추가
          </PostButton>
        </div>
        {forms
          .map((elem, i) => {
            return (
              <PostDiv key={i}>
                <PostSmallCountDiv>게시글 번호:{elem.count}</PostSmallCountDiv>
                <PostSmallTitleDiv>제목:{elem.title}</PostSmallTitleDiv>
                <PostSmallDiv>
                  작성날짜: {elem.createdAt} / 갱신날짜: {elem.updatedAt}
                </PostSmallDiv>
                <PostSmallDiv>작성자:{elem.writerName}</PostSmallDiv>
                <PostSmallDiv></PostSmallDiv>
                <PostSmallDiv>
                  {/* <PostButton
                    onClick={() => {
                      onSubmitModify(elem);
                    }}
                  >
                    수정
                  </PostButton> */}
                  <PostButton
                    onClick={() => {
                      onSubmitDelete(elem);
                    }}
                  >
                    삭제
                  </PostButton>
                </PostSmallDiv>
              </PostDiv>
            );
          })
          .slice(index*3, index*3 + 3)}
      </PostBox>
    </>
  );
}

export default PostForm;
