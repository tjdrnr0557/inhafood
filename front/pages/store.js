import React from "react";
import styled from "styled-components";
import PostCardd from "../containers/PostCardd";

const Posts = [
  {
    username: "첫번째유저",
    content:
      "이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ ? 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ ",
    rating: 4.3,
    createdAt: "2020-03-04"
  },
  {
    username: "첫번째유저",
    content: "dfsdfsdvxcvxcvsdf",
    rating: 4.3,
    createdAt: "2020-03-04"
  },
  {
    username: "첫번째유저",
    content: "dfsdfsdvxcvxcvsdf",
    rating: 4.3,
    createdAt: "2020-03-04"
  }
];

const Layout = styled.div`
  padding: 1rem;
`;
const HeadImgWrapper = styled.div`
  height: 20rem;
  @media screen and (max-width: 768px) {
    height: 15rem;
  }
`;
const StoreWrapper = styled.div`
  padding: 1rem;
  min-height: 22rem;
  @media screen and (max-width: 768px) {
    min-height: 20rem;
  }
  border-bottom: 1px solid #dbdbdb;
`;
const PostWrapper = styled.div`
  padding: 1rem;
  @media screen and (max-width: 768px) {
  }
`;
const H1wrapper = styled.div`
  padding-top: 1rem;
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.85);
`;
const Pwrapper = styled.div`
  font-size: 1rem;
  color: grey;
  @media screen and (max-width: 768px) {
  }
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 1rem;
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  padding-top: 1rem;
`;
const TdWrapper = styled.div`
  padding: 0.3rem;
`;
const ReviewWrapper = styled.div`
  font-size: 1.5rem;
  padding-bottom: 1rem;
`;

const Store = () => {
  return (
    <Layout>
      <HeadImgWrapper>ab ㅂc</HeadImgWrapper>
      <StoreWrapper>
        <>
          <H1wrapper>필바든치킨</H1wrapper>
          <Pwrapper>치킨이 맛있는 순살치킨 양념</Pwrapper>
        </>
        <GridWrapper>
          <TdWrapper>주소</TdWrapper>
          <TdWrapper>2</TdWrapper>
          <TdWrapper>전화번호</TdWrapper>
          <TdWrapper>4</TdWrapper>
          <TdWrapper>영업시간</TdWrapper>
          <TdWrapper>6</TdWrapper>
          <TdWrapper>메뉴</TdWrapper>
          <TdWrapper>
            치킨이 맛있는 순살치킨 양념치킨이 맛있는 순살치킨 양념치킨이 맛있는
            순살치킨 양념치킨이 맛있는 순살치킨 양념치킨이 맛있는 순살치킨
            양념치킨이 맛있는 순살치킨 양념치킨이 맛있는 순살치킨 양념치킨이
            맛있는 순살치킨 양념치킨이 맛있는 순살치킨 양념치킨이 맛있는
            순살치킨 양념치킨이 맛있는 순살치킨 양념치킨이 맛있는 순살치킨
            양념치킨이 맛있는 순살치킨 양념치킨이 맛있는 순살치킨 양념치킨이
            맛있는 순살치킨 양념치킨이 맛있는 순살치킨 양념
          </TdWrapper>
          <TdWrapper>dd</TdWrapper>
          <TdWrapper>dd</TdWrapper>
        </GridWrapper>
        <p style={{ textAlign: "right" }}>업데이트 : 2020.03.04</p>
      </StoreWrapper>
      <PostWrapper>
        <ReviewWrapper>리뷰 (5)</ReviewWrapper>
        {Posts.map(p => {
          return <PostCardd post={p} />;
        })}
      </PostWrapper>
    </Layout>
  );
};

export default Store;
