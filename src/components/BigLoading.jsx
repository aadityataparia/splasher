import React from "react";
import { PaddedContainer, CentredDiv } from "./GenericStyles";
import { Loading3QuartersOutlined } from "@ant-design/icons";

const BigLoading = () => (
  <PaddedContainer>
    <CentredDiv>
      <Loading3QuartersOutlined
        spin
        size="large"
        style={{ fontSize: "40px" }}
      ></Loading3QuartersOutlined>
    </CentredDiv>
  </PaddedContainer>
);

export default BigLoading;
