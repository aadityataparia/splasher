import React from "react";
import styled from "styled-components";

const MinDiv = styled.div`
  min-height: calc(100vh - 64px);
`;

const Page = ({ children }) => {
  return <MinDiv>{children}</MinDiv>;
};

export default Page;
