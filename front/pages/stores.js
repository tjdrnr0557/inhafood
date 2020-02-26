import React from "react";
import styled from "styled-components";
import StoreCard from "../containers/StoreCard";

const storesArr = [
  {
    id: 1,
    name: "필바든치킨",
    kindId: 1,
    description: "양념 순살이 가장 맛있는 필바든치킨",
    img:
      "https://m.blog.naver.com/PostView.nhn?blogId=unionwed&logNo=221014536391&proxyReferer=https%3A%2F%2Fwww.google.com%2F&view=img_1"
  },
  {
    id: 1,
    name: "필바든치킨",
    kindId: 1,
    description: "양념 순살이 가장 맛있는 필바든치킨",
    img: ""
  },
  {
    id: 1,
    name: "필바든치킨",
    kindId: 1,
    description: "양념 순살이 가장 맛있는 필바든치킨",
    img: ""
  },
  {
    id: 1,
    name: "필바든치킨",
    kindId: 1,
    description: "양념 순살이 가장 맛있는 필바든치킨",
    img: ""
  }
];

const StoreWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 7%;
  border: 1px solid;
`;

const Stores = () => {
  return (
    <StoreWrapper>
      {storesArr.map(c => {
        return <StoreCard store={c} />;
      })}
    </StoreWrapper>
  );
};

// Stores.getInitialProps = async context => {};

export default Stores;
