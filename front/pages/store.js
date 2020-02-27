import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_STORE_REQUEST } from "../reducers/post";

import StoreCard from "../containers/StoreCard";

const storesArr = [
  {
    id: 1,
    name: "1. 필바든치킨",
    kindId: 1,
    description: "양념 순살이 가장 맛있는 필바든치킨",
    img: "http://www.enewstoday.co.kr/news/photo/201604/511235_134361_648.jpg"
  },
  {
    id: 1,
    name: "2. 닭큐멘터리",
    kindId: 1,
    description: "양념 순살이 가장 맛있는 필바든치킨",
    img:
      "https://mblogthumb-phinf.pstatic.net/MjAxNzA1MDdfMTg3/MDAxNDk0MDgzOTk4NTU4.972mR0izakm1sqFgtBPMqXEW7rfpSttydtiQMm6lylgg.P_NxaO_-nhY_ZM9x23JQusjO8Su8uIoFPHqR8KgKiVYg.JPEG.mhj9722/IMG_5635.jpg?type=w800"
  },
  {
    id: 1,
    name: "3. 웨이사이드",
    kindId: 1,
    description: "양념 순살이 가장 맛있는 필바든치킨",
    img:
      "https://mp-seoul-image-production-s3.mangoplate.com/14039/533317_1474088500745_9216"
  },
  {
    id: 1,
    name: "4. 치킨하우스",
    kindId: 1,
    description: "양념 순살이 가장 맛있는 필바든치킨",
    img: "http://www.enewstoday.co.kr/news/photo/201604/511235_134361_648.jpg"
  }
];

const StoreWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

const HeadWrapper = styled.div`
  height: 100%;
  padding: 5% 0;
  background-color: #f7f7f7;
  // border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Store = ({ store }) => {
  return (
    <>
      <HeadWrapper>
        <h1>이곳은 치킨페이지입니다</h1>
        <p>치킨 / 찜닭 / 닭한마리 / 닭요리</p>
      </HeadWrapper>
      <StoreWrapper>
        {storesArr.map(c => {
          return <StoreCard store={c} />;
        })}
      </StoreWrapper>
    </>
  );
};

Store.getInitialProps = async context => {
  const sname = context.query.sname;
  console.log("@@@@@ store name", sname);
  context.store.dispatch({
    type: LOAD_STORE_REQUEST,
    data: sname
  });
  return { store };
};

export default Store;
