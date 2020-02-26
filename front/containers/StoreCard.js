import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 80%;
  margin-right: 10%;
  margin-left: 10%;
  min-height: 30%;
  border: 1px solid;
  padding-top: 3%;
  padding-bottom: 3%;
  display: flex;
`;
const EachImage = styled.img`
  min-width: 30%;
  min-height: 30%;
  overflow: hidden;
`;
const EachDescription = styled.div`
  width: 100%;
  border: 1px solid;
`;
const StoreCard = ({ store }) => {
  return (
    <CardWrapper>
      <EachImage alt="example" src={store.img} />
      <EachDescription>
        <h1 style={{ paddingLeft: "5%" }}>{store.name}</h1>
        <p style={{ paddingLeft: "5%", fontSize: "1rem" }}>
          맛있는 치킨을 제공하는 곳
        </p>
      </EachDescription>
    </CardWrapper>
  );
};

export default StoreCard;
