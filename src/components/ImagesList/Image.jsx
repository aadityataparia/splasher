import React from "react";
import {
  ResponsiveDiv,
  Img,
  HoverDiv,
  TopRight,
  BottomLeft,
  WhiteText,
} from "./styles";
import DownloadImage from "./DownloadImage";
import { Avatar } from "antd";

export const Image = ({ data }) => {
  return (
    <ResponsiveDiv>
      <Img
        src={data.urls.small}
        alt={data.alt_description}
        title={data.alt_description}
      ></Img>
      <HoverDiv>
        <TopRight>
          <DownloadImage data={data}></DownloadImage>
        </TopRight>
        <BottomLeft>
          <WhiteText>
            <Avatar src={data.user.profile_image.medium} /> {data.user.name}
          </WhiteText>
        </BottomLeft>
      </HoverDiv>
    </ResponsiveDiv>
  );
};

export default Image;
