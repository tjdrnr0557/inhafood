import React from "react";
import { Card } from "antd";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 30%;
  height: 30%;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const EachImage = styled.img`
  width: 100%;
  height: 100%;
`;

const KindCard = ({ post }) => {
  return (
    <ImageWrapper>
      <EachImage alt="example" src={post.img} />
      <div>{post.name}</div>
    </ImageWrapper>
  );
};

export default KindCard;
