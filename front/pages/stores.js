import React from "react";
import styled from "styled-components";
import StoreCard from "../containers/StoreCard";
import { PageHeader } from "antd";

const storesArr = [
  {
    id: 1,
    name: "필바든치킨",
    kindId: 1,
    description: "양념 순살이 가장 맛있는 필바든치킨",
    img: "http://www.enewstoday.co.kr/news/photo/201604/511235_134361_648.jpg"
  },
  {
    id: 1,
    name: "닭큐멘터리",
    kindId: 1,
    description: "양념 순살이 가장 맛있는 필바든치킨",
    img: "http://www.enewstoday.co.kr/news/photo/201604/511235_134361_648.jpg"
  },
  {
    id: 1,
    name: "웨이사이드",
    kindId: 1,
    description: "양념 순살이 가장 맛있는 필바든치킨",
    img: "http://www.enewstoday.co.kr/news/photo/201604/511235_134361_648.jpg"
  },
  {
    id: 1,
    name: "치킨하우스",
    kindId: 1,
    description: "양념 순살이 가장 맛있는 필바든치킨",
    img: "http://www.enewstoday.co.kr/news/photo/201604/511235_134361_648.jpg"
  }
];

const StoreWrapper = styled.div`
  width: 100%;
  min-height: 40rem;
  border: 1px solid;
`;

const HeadWrapper = styled.div`
  border: 1px solid;
  height: 10rem;
  margin-top: 3%;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Stores = () => {
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

// Stores.getInitialProps = async context => {};

export default Stores;
