import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Col, Input, Menu, Row } from "antd";
import { useSelector } from "react-redux";
import Router from "next/router";
import LoginForm from "../containers/LoginForm";
import UserProfile from "../containers/UserProfile";

const AppLayout = ({ children }) => {
  const { me } = useSelector(state => state.user);

  const onSearch = value => {
    // Router.push(
    //   { pathname: "/hashtag", query: { tag: value } },
    //   `/hashtag/${value}`
    // );
  };

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>홈</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link href="/login">
            <a>로그인</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search
            enterButton
            style={{ verticalAlign: "middle" }}
            onSearch={onSearch}
          />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col>{children}</Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppLayout;
