import React from "react";
import styled from "styled-components";
import { join } from "redux-saga/effects";

const HeadImgWrapper = styled.div`
  height: 20rem;
  border: 1px solid black;
  @media screen and (max-width: 768px) {
    height: 15rem;
  }
`;
const StoreWrapper = styled.div`
  height: 26rem;
  border: 1px solid black;
  @media screen and (max-width: 768px) {
    height: 20rem;
  }
`;
const PostWrapper = styled.div`
  border: 1px solid black;
  @media screen and (max-width: 768px) {
  }
`;
const H1wrapper = styled.div`
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.85);
`;
const Pwrapper = styled.div`
  font-size: 1rem;
  color: grey;
  @media screen and (max-width: 768px) {
  }
`;

const Store = () => {
  return (
    <>
      <HeadImgWrapper>ab ㅂc</HeadImgWrapper>
      <StoreWrapper>
        <>
          <H1wrapper>hi</H1wrapper>
          <Pwrapper>dfjsdkfajdsf</Pwrapper>
        </>
      </StoreWrapper>
      <PostWrapper></PostWrapper>
    </>
  );
};

export default Store;
