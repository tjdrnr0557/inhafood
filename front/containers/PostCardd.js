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
`;
const AvatarWrapper = styled.div`
  text-align: center;
  padding: 2rem 0;
  @media screen and (max-width: 768px) {
    padding: 0.5rem 0;
    text-align: left;
    display: flex;
  }
`;
const NameWrapper = styled.div`
  padding-top: 0.5rem;
  font-size: 0.7rem;
  @media screen and (max-width: 768px) {
    padding-top: 0;
    padding-left: 0.3rem;
  }
`;
const CommentWrapper = styled.div`
  padding: 2rem 1rem;
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const PostCardd = ({ post }) => {
  return (
    <CardWrapper>
      <AvatarWrapper>
        <Avatar size="large" icon="user" />
        <NameWrapper>닉네임은뭐닉네은뭐닉네임은뭐닉네임은뭐</NameWrapper>
      </AvatarWrapper>
      <CommentWrapper>{post.content}</CommentWrapper>
    </CardWrapper>
  );
};

export default PostCardd;
