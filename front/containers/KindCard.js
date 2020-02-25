import React from "react";
import { Card } from "antd";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 100%;
  height: 8rem;
  margin-top: 3%;
  border: 1px solid;
`;

const KindCard = ({ post }) => {
  return <ImageWrapper>{post.content}</ImageWrapper>;
};

export default KindCard;
