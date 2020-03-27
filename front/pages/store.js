import React, { useCallback, useState } from "react";
import styled from "styled-components";
import PostCard from "../containers/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_STORE_REQUEST } from "../reducers/stores";
import { Rate, Button } from "antd";
import Router from "next/router";

const Posts = [
  {
    username: "첫번째유저",
    content:
      "이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ ? 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ ? 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ 이렇게 아년ㅇ하세요라고 말하는 거도 웃긴거야 ㅇㄹㄴㅇㄹㄴㅇㄹ ",
    rating: 4.3,
    createdAt: "2020-03-04"
  },
  {
    username: "첫번째유저",
    content: "dfsdfsdvxcvxcvsdf",
    rating: 4.3,
    createdAt: "2020-03-04"
  },
  {
    username: "첫번째유저",
    content:
      "벌써 다섯번째 방문인데 점점 갈수록 감동이 좀 덜하네요 ㅠㅠ 코스도 먹어보고 단품으로도 먹어봤는데 단품으로 시키는게 나은 것 같아요. 요리류는 괜찮은데 생각보다 식사류(짜장면, 짬뽕, 볶음밥 등)이 너무 임팩트가 없어요 ",
    rating: 4.3,
    createdAt: "2020-03-04"
  }
];

const AppLayout = styled.div`
  padding: 1rem;
`;
const HeadWrapper = styled.div`
  height: 30rem;
  overflow: hidden;
  background-image: url(${props => props.src});
  background-color: rgb(0, 0, 0);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  @media screen and (max-width: 768px) {
    height: 20rem;
  }
`;

const StoreWrapper = styled.div`
  padding: 1rem;
  min-height: 22rem;
  @media screen and (max-width: 768px) {
    min-height: 20rem;
  }
  border-bottom: 1px solid #dbdbdb;
`;
const PostWrapper = styled.div`
  padding: 1rem;
  @media screen and (max-width: 768px) {
  }
`;
const ImgWrapper = styled.div`
  text-align: center;
  height: 30rem;
  padding-top: 16rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.9) 95%
  );
  @media screen and (max-width: 768px) {
    padding-top: 10rem;
    height: 20rem;
  }
`;
const NameWrapper = styled.div`
  font-size: 2.5rem;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  padding-top: 1rem;
`;
const TdWrapper = styled.div`
  padding: 0.3rem;
`;
const ReviewWrapper = styled.div`
  font-size: 1.5rem;
  padding-bottom: 1rem;
`;
const PWrapper = styled.div`
  font-size: 1rem;
  color: grey;
`;

const Store = ({ id }) => {
  const { store } = useSelector(state => state.stores);
  const [rateValue, setRateValue] = useState(0);
  const { me } = useSelector(state => state.user);
  const handleClick = useCallback(() => {
    if (me) Router.push("/post/" + id);
    else Router.push("/login");
  }, []);
  const handleRateChange = useCallback(value => {
    let integer = Math.floor(value);
    let point = value - integer;
    let rate;
    if (point < 0.25) rate = integer;
    else if (point >= 0.25 && point < 0.75) rate = integer + 0.5;
    else if (point >= 0.75) rate = integer + 1;
    setRateValue(rate);
  }, []);

  return (
    <>
      <HeadWrapper>
        <ImgWrapper>
          <NameWrapper></NameWrapper>
          <Rate allowHalf allowClear={false} value={rateValue} />
          <PWrapper>평점 3.5</PWrapper>
        </ImgWrapper>
      </HeadWrapper>
      <AppLayout>
        <StoreWrapper>
          <GridWrapper>
            <TdWrapper>주소</TdWrapper>
            <TdWrapper>
              <Rate />
            </TdWrapper>
            <TdWrapper>전화번호</TdWrapper>
            <TdWrapper>4</TdWrapper>
            <TdWrapper>영업시간</TdWrapper>
            <TdWrapper>6</TdWrapper>
            <TdWrapper>메뉴</TdWrapper>
            <TdWrapper>
              치킨이 맛있는 순살치킨 양념치킨이 맛있는 순살치킨 양념치킨이
              맛있는 순살치킨 양념치킨이 맛있는 순살치킨 양념치킨이 맛있는
              순살치킨 양념치킨이 맛있는 순살치킨 양념치킨이 맛있는 순살치킨
              양념치킨이 맛있는 순살치킨 양념치킨이 맛있는 순살치킨 양념치킨이
              맛있는 순살치킨 양념치킨이 맛있는 순살치킨 양념치킨이 맛있는
              순살치킨 양념치킨이 맛있는 순살치킨 양념치킨이 맛있는 순살치킨
              양념치킨이 맛있는 순살치킨 양념치킨이 맛있는 순살치킨 양념
            </TdWrapper>
            <TdWrapper>dd</TdWrapper>
            <TdWrapper>dd</TdWrapper>
          </GridWrapper>
          <p style={{ textAlign: "right" }}>업데이트 : 2020.03.04</p>
        </StoreWrapper>
        <PostWrapper>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ReviewWrapper>리뷰 (5)</ReviewWrapper>
            <Button type="primary" onClick={handleClick}>
              리뷰쓰기
            </Button>
          </div>
          {Posts.map(p => {
            return <PostCard post={p} />;
          })}
        </PostWrapper>
      </AppLayout>
    </>
  );
};

Store.getInitialProps = async context => {
  const id = context.query.id;
  context.store.dispatch({
    type: LOAD_STORE_REQUEST,
    data: id
  });
  return { id };
};
export default Store;
