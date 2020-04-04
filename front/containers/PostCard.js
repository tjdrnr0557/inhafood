import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";
import { Avatar, Rate } from "antd";

const CardWrapper = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 7fr;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  border-bottom: 1px solid #dbdbdb;
`;
const AvatarWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  @media screen and (max-width: 768px) {
    padding: 0.7rem 0 0.2rem 0;
  }
`;
const NextAvatarWrapper = styled.div``;
const RateWrapper = styled.div`
  padding-left: 0.5rem;
  ul {
    font-size: 0.9rem;
  }
  li {
    margin-right: 0;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  padding-left: 0.5rem;
  font-weight: bold;
`;
const CommentWrapper = styled.div`
  padding: 1.58rem 1rem;
  @media screen and (max-width: 768px) {
    padding: 0 0 1rem 0;
  }
`;

const PostCard = ({ post }) => {
  const { User } = post;
  return (
    <CardWrapper>
      <AvatarWrapper>
        <Avatar
          size="large"
          icon="user"
          style={{ backgroundColor: "#1890FF" }}
        />
        <NextAvatarWrapper>
          <NameWrapper>{User.nickname}</NameWrapper>
          <RateWrapper>
            <Rate value={post.rate} disabled />
          </RateWrapper>
        </NextAvatarWrapper>
      </AvatarWrapper>
      <CommentWrapper>
        <div>{post.content}</div>
      </CommentWrapper>
    </CardWrapper>
  );
};

export default PostCard;
