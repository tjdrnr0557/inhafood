import React, { useEffect, useCallback, useRef } from "react";
import { Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import PostForm from "../containers/PostForm";
import KindCard from "../containers/KindCard";
import styled from "styled-components";
import { LOAD_MAIN_POSTS_REQUEST } from "../reducers/post";

const Home = () => {
  // const { me } = useSelector(state => state.user);
  // const { mainPosts, hasMorePost } = useSelector(state => state.post);
  // const dispatch = useDispatch();

  const mainPosts = [
    {
      id: 1,
      name: "밥집",
      kindId: 1,
      content: "맛있는 밥집",
      img: ""
    },
    {
      id: 2,
      name: "고기집",
      kindId: 1,
      content: "고기집이다@@",
      img: ""
    },
    {
      id: 3,
      name: "양식",
      kindId: 1,
      content: "양식@@양식",
      img: ""
    }
  ];

  return (
    <>
      {mainPosts.map(c => {
        return <KindCard key={c.id} post={c} />;
      })}
    </>
  );
};

Home.getInitialProps = async context => {
  // console.log(Object.keys(context));
  // context.store.dispatch({
  //   type: LOAD_MAIN_POSTS_REQUEST
  // });
};

export default Home;
