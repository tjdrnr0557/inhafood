import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_STORES_REQUEST } from "../reducers/stores";

import StoreCard from "../containers/StoreCard";

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

const Stores = ({ kindName }) => {
  const { storePosts } = useSelector(state => state.stores);

  return (
    <>
      <HeadWrapper>
        <h1>이곳은 {kindName}페이지입니다</h1>
        <p>치킨 / 찜닭 / 닭한마리 / 닭요리</p>
      </HeadWrapper>
      <StoreWrapper>
        {storePosts &&
          storePosts.map(c => {
            return <StoreCard store={c} />;
          })}
      </StoreWrapper>
    </>
  );
};

Stores.getInitialProps = async context => {
  const kindName = context.query.kindName;
  context.store.dispatch({
    type: LOAD_STORES_REQUEST,
    data: kindName
  });
  return { kindName };
};

export default Stores;
