import React, { useCallback, useState, useEffect } from "react";
import { Tag } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";

const ImageWrapper = styled.div`
  cursor: pointer;
  width: 23%;
  height: 23%;
  margin: 5%;
  //border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  &:hover {
    background: #808080;
  }
`;
const EachImage = styled.img`
  width: 100%;
  height: 100%;
`;
const TextWrapper = styled.h2`
  text-align: center;
`;

const KindCard = ({ post }) => {
  const handleClick = useCallback(() => {
    Router.push("/stores/" + post.name);
  }, [post && post.name]);
  return (
    <ImageWrapper onClick={handleClick}>
      <EachImage alt="example" src={post.img} />
      <TextWrapper>{post.name}</TextWrapper>
    </ImageWrapper>
  );
};

export default KindCard;
