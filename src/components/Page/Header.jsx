import React from "react";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";
import { Menu } from "antd";
import { GoldOutlined, UserOutlined } from "@ant-design/icons";
import { useCallback } from "react";

const FixedMenu = styled(Menu)`
  position: fixed;
  z-index: 1000;
  right: 0;
  left: 0;
`;

const RightMenuItem = styled(Menu.Item)`
  float: right;
`;

const Padding = styled.div`
  height: 50px;
`;

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const handleClick = useCallback((e) => history.push(e.key), [history]);

  return (
    <React.Fragment>
      <FixedMenu
        onClick={handleClick}
        selectedKeys={[location.pathname]}
        mode="horizontal"
      >
        <Menu.Item key="/" icon={<GoldOutlined />} danger>
          Splasher
        </Menu.Item>
        <RightMenuItem key="/favorites" icon={<UserOutlined />}>
          My Favorites
        </RightMenuItem>
      </FixedMenu>
      <Padding style={{ height: 50 }}></Padding>
    </React.Fragment>
  );
};

export default Header;
