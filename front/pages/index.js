import React, { useEffect, useCallback, useRef } from "react";
import { Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import PostForm from "../containers/PostForm";
import KindCard from "../containers/KindCard";
import styled from "styled-components";
import { LOAD_MAIN_POSTS_REQUEST } from "../reducers/post";

const storeKinds = [
  {
    id: 1,
    name: "치킨",
    content: "맛있는 치킨",
    img: "https://image.flaticon.com/icons/svg/2615/2615213.svg"
  },
  {
    id: 2,
    name: "고기집",
    kindId: 1,
    content: "고기집이다@@",
    img: "https://image.flaticon.com/icons/svg/1134/1134447.svg"
  },
  {
    id: 3,
    name: "밥집",
    kindId: 1,
    content: "밥집",
    img: "https://image.flaticon.com/icons/svg/454/454586.svg"
  },
  {
    id: 4,
    name: "중국집",
    kindId: 1,
    content: "중국집",
    img: "https://image.flaticon.com/icons/svg/890/890051.svg"
  },
  {
    id: 5,
    name: "양식",
    kindId: 1,
    content: "파",
    img: "https://image.flaticon.com/icons/svg/1404/1404945.svg"
  },
  {
    id: 3,
    name: "일식",
    kindId: 1,
    content: "회/일식/돈까스",
    img: "https://image.flaticon.com/icons/svg/2346/2346242.svg"
  },
  {
    id: 3,
    name: "분식",
    kindId: 1,
    content: "분식/컵밥",
    img: "https://www.flaticon.com/premium-icon/icons/svg/2515/2515169.svg"
  }
];

const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 7%;
  //border: 1px solid;
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => {
  // const { me } = useSelector(state => state.user);
  // const { mainPosts, hasMorePost } = useSelector(state => state.post);
  // const dispatch = useDispatch();

  return (
    <MainWrapper>
      {storeKinds.map(c => {
        return <KindCard key={c.id} post={c} />;
      })}
    </MainWrapper>
  );
};

Home.getInitialProps = async context => {
  // console.log(Object.keys(context));
  // context.store.dispatch({
  //   type: LOAD_MAIN_POSTS_REQUEST
  // });
};

export default Home;
