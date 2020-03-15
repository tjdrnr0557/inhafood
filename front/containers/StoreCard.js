import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";

const CardWrapper = styled.div`
  width: 100%;
  //margin-right: 5%;
  //margin-left: 5%;
  border-bottom: 1px solid #dbdbdb;
  padding: 3% 0;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 5% 0;
  }
`;
const EachImage = styled.img`
  width: 30rem;
  height: 14rem;
  overflow: hidden;
  margin-right: 5%;
  margin-left: 5%;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 12rem;
  }
`;
const EachDescription = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-right: 5%;
    margin-left: 5%;
  }
`;

const H1wrapper = styled.div`
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.85);
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding-top: 3%;
  }
`;
const Pwrapper = styled.div`
  font-size: 1rem;
  color: grey;
  @media screen and (max-width: 768px) {
  }
`;
const StoreCard = ({ store }) => {
  const handleClick = useCallback(() => {
    Router.push("/store/"+store.id);
  }, []);
  return (
    <CardWrapper onClick={handleClick}>
      <EachImage alt="example" src={store.img} />
      <EachDescription>
        <H1wrapper>{store.storename}</H1wrapper>
        <Pwrapper>{store.content}</Pwrapper>
      </EachDescription>
    </CardWrapper>
  );
};

export default StoreCard;
