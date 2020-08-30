import React from "react";
import styled from "styled-components";
import { Col } from "antd";

export const CentredDiv = styled.div`
  text-align: center;
`;

export const PaddedContainer = styled.div`
  padding: 16px 24px;
  margin: 0;
`;

export const SidePaddedContainer = styled.div`
  padding: 4px 24px;
  margin: 0;
`;

export const Br = styled.div`
  padding: 8px;
  margin: 0;
`;

export const FormFieldLabel = styled.p`
  color: #333;
`;

export const RespCol = ({ small = false, full = false, ...props }) => (
  <Col
    xs={24}
    sm={full ? 24 : 12}
    md={full ? 24 : small ? 12 : 8}
    xl={full ? 24 : small ? 8 : 6}
    xxl={full ? 24 : small ? 6 : 4}
    {...props}
  ></Col>
);
