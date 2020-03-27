import React, { useCallback, useState } from "react";
import styled from "styled-components";
import PostCard from "../containers/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_STORE_REQUEST } from "../reducers/stores";
import { Rate, Button } from "antd";
import Router from "next/router";

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
  const { me } = useSelector(state => state.user);
  const { store } = useSelector(state => state.stores);
  const { Posts } = store;
  const [rateValue, setRateValue] = useState(0);

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
      <HeadWrapper src={`http://localhost:3065/${store.img}`}>
        <ImgWrapper>
          <NameWrapper>{store.storename}</NameWrapper>
          <Rate allowHalf allowClear={false} value={rateValue} />
          <PWrapper>평점 3.5</PWrapper>
        </ImgWrapper>
      </HeadWrapper>
      <AppLayout>
        <StoreWrapper>
          <GridWrapper>
            <TdWrapper>주소</TdWrapper>
            <TdWrapper></TdWrapper>
            <TdWrapper>전화번호</TdWrapper>
            <TdWrapper>4</TdWrapper>
            <TdWrapper>영업시간</TdWrapper>
            <TdWrapper>6</TdWrapper>
            <TdWrapper>메뉴</TdWrapper>
            <TdWrapper>{store.content}</TdWrapper>
            <TdWrapper>dd</TdWrapper>
            <TdWrapper>dd</TdWrapper>
          </GridWrapper>
          <p style={{ textAlign: "right" }}>업데이트 : {store.updatedAt}</p>
        </StoreWrapper>
        <PostWrapper>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ReviewWrapper>
              리뷰 ({store.Posts && store.Posts.length})
            </ReviewWrapper>
            <Button type="primary" onClick={handleClick}>
              리뷰쓰기
            </Button>
          </div>
          {Posts &&
            Posts.map(p => {
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
