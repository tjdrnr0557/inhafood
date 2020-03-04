import React from "react";
import styled from "styled-components";
import { join } from "redux-saga/effects";

const Layout = styled.div`
  margin: 1rem;
`;
const HeadImgWrapper = styled.div`
  height: 20rem;
  border: 1px solid black;
  @media screen and (max-width: 768px) {
    height: 15rem;
  }
`;
const StoreWrapper = styled.div`
  padding: 1rem;
  min-height: 22rem;
  border: 1px solid black;
  @media screen and (max-width: 768px) {
    min-height: 20rem;
  }
`;
const PostWrapper = styled.div`
  border: 1px solid black;
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
      <PostWrapper></PostWrapper>
    </Layout>
  );
};

export default Store;
