import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";
import { Avatar } from "antd";

const CardWrapper = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 8fr;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  border-bottom: 1px solid #dbdbdb;
`;
const AvatarWrapper = styled.div`
  text-align: center;
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    padding: 0.7rem 0 0.2rem 0;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const NameWrapper = styled.div`
  padding-top: 0.5rem;
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    padding-top: 0;
    padding-left: 0.3rem;
  }
`;
const CommentWrapper = styled.div`
  padding: 1.58rem 1rem;
  @media screen and (max-width: 768px) {
    padding: 0 0 1rem 0;
  }
`;
const RateWrapper = styled.div`
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
const RateDate = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostCard = ({ post }) => {
  const { User } = post;
  return (
    <CardWrapper>
      <AvatarWrapper>
        <Avatar size="large" icon="user" />
        <NameWrapper>{User.nickname}</NameWrapper>
      </AvatarWrapper>
      <CommentWrapper>
        <RateDate>
          <RateWrapper>{post.rate}</RateWrapper>
          <div style={{ color: "#dbdbdb" }}>{User.createdAt}</div>
        </RateDate>
        <div>{post.content}</div>
      </CommentWrapper>
    </CardWrapper>
  );
};

export default PostCard;
