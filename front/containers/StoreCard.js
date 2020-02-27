import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 90%;
  margin-right: 5%;
  margin-left: 5%;
  // min-height: 50%;
  //border: 1px solid;
  border-bottom: 1px solid;
  padding: 3% 0;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 7% 0;
  }
`;
const EachImage = styled.img`
  width: 30rem;
  height: 14rem;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 12rem;
  }
`;
const EachDescription = styled.div`
  width: 100%;
  //border: 1px solid;
`;

const H1wrapper = styled.div`
   {
    padding-left: 5%;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.85);
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
      padding-top: 3%;
      padding-left: 0;
    }
  }
`;
const Pwrapper = styled.div`
  padding-left: 5.5%;
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    padding-left: 0.5%;
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
