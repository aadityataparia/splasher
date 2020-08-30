import React from "react";
import styled from "styled-components";
import { BackTop } from "antd";

const MinDiv = styled.div`
  min-height: calc(100vh - 64px);
`;

const Page = ({ children }) => {
  return (
    <MinDiv>
      {children}
      <BackTop></BackTop>
    </MinDiv>
  );
};

export default Page;
