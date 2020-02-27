import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;
  // min-height: 50%;
  //border: 1px solid;
  padding-top: 2%;
  border-bottom: 1px solid;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const EachImage = styled.img`
  width: 50%;
  height: 50%;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
const EachDescription = styled.div`
  width: 100%;
  //border: 1px solid;
`;

const H1wrapper = styled.h3`
   {
    padding-left: 5%;
    // font-size: 2rem;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
      padding-top: 5%;
      padding-left: 0;
    }
  }
`;
const Pwrapper = styled.p`
  padding-left: 5%;
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;
const StoreCard = ({ store }) => {
  return (
    <CardWrapper>
      <EachImage alt="example" src={store.img} />
      <EachDescription>
        <H1wrapper>{store.name}</H1wrapper>
        <Pwrapper>맛있는 치킨을 제공하는 곳</Pwrapper>
      </EachDescription>
    </CardWrapper>
  );
};

export default StoreCard;
