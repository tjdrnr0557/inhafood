import React, { useEffect, useCallback, useRef } from "react";
import { Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import PostForm from "../containers/PostForm";
import PostCard from "../containers/PostCard";
import { LOAD_MAIN_POSTS_REQUEST } from "../reducers/post";

const Home = () => {
  // const { me } = useSelector(state => state.user);
  // const { mainPosts, hasMorePost } = useSelector(state => state.post);
  // const dispatch = useDispatch();
  // const countRef = useRef([]);

  // const onScroll = useCallback(() => {
  //   if (
  //     window.scrollY + document.documentElement.clientHeight >
  //     document.documentElement.scrollHeight - 300
  //   ) {
  //     if (hasMorePost) {
  //       const lastId = mainPosts[mainPosts.length - 1].id;
  //       if (!countRef.current.includes(lastId)) {
  //         dispatch({
  //           type: LOAD_MAIN_POSTS_REQUEST,
  //           lastId
  //         });
  //         countRef.current.push(lastId);
  //       }
  //     }
  //   }
  // }, [hasMorePost, mainPosts.length]);

  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, [mainPosts.length]);

  return (
    <Card style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};

Home.getInitialProps = async context => {
  console.log(Object.keys(context));
  context.store.dispatch({
    type: LOAD_MAIN_POSTS_REQUEST
  });
};

export default Home;
