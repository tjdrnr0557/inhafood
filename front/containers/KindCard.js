import React from "react";
import { Tag } from "antd";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 23%;
  height: 23%;
  margin: 5%;
  //border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const EachImage = styled.img`
  width: 100%;
  height: 100%;
`;
const TextWrapper = styled.h2`
  text-align: center;
`;

const KindCard = ({ post }) => {
  return (
    <ImageWrapper>
      <EachImage alt="example" src={post.img} />
      <TextWrapper>{post.name}</TextWrapper>
    </ImageWrapper>
  );
};

export default KindCard;
