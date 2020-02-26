import React from "react";
import { Card } from "antd";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 80%;
  margin-right: 10%;
  margin-left: 10%;
  height: 100%;
  border: 1px solid;
  padding-top: 3%;
  padding-bottom: 3%;
  display: flex;
`;
const EachImage = styled.img`
  width: 30%;
  height: 15rem;
`;
const StoreCard = ({ store }) => {
  return (
    <CardWrapper>
      <EachImage alt="example" src={store.img} />
      <div>hi</div>
    </CardWrapper>
  );
};

export default StoreCard;
