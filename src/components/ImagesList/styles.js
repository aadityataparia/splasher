import styled from "styled-components";

const padding = 8;
export const HoverDiv = styled.div`
  position: absolute;
  left: ${padding}px;
  top: ${padding}px;
  right: ${padding}px;
  bottom: ${padding}px;
  opacity: 0;
  background: rgba(0, 0, 0, 0.35);
  transition: opacity 0.3s;
`;

export const ResponsiveDiv = styled.div`
  width: 100%;
  display: inline-block;
  padding: ${padding}px;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }

  @media only screen and (min-width: 992px) {
    width: 33.33%;
  }

  @media only screen and (min-width: 1200px) {
    width: 25%;
  }

  &:hover ${HoverDiv} {
    opacity: 1;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const TopRight = styled.div`
  position: absolute;
  top: ${2 * padding}px;
  right: ${2 * padding}px;
`;

export const BottomLeft = styled.div`
  position: absolute;
  left: ${2 * padding}px;
  bottom: ${2 * padding}px;
`;

export const WhiteText = styled.p`
  color: white;
  margin: 0;
  font-size: 14px;
`;
