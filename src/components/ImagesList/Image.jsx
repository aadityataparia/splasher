import React from "react";
import { Avatar } from "antd";
import {
  ResponsiveDiv,
  Img,
  HoverDiv,
  TopRight,
  BottomLeft,
  WhiteText,
} from "./styles";
import DownloadImage from "./DownloadImage";
import FavoriteImageButton from "./FavoriteImageButton";

export const Image = ({ data, setFavorite }) => {
  return (
    <ResponsiveDiv>
      <Img
        src={data.urls.small}
        alt={data.alt_description}
        title={data.alt_description}
      ></Img>
      <HoverDiv>
        <TopRight>
          <DownloadImage data={data}></DownloadImage>{" "}
          <FavoriteImageButton
            data={data}
            setFavorite={setFavorite}
          ></FavoriteImageButton>
        </TopRight>
        <BottomLeft>
          <WhiteText>
            <a
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
              href={data.user.links.html}
            >
              <Avatar src={data.user.profile_image.medium} /> {data.user.name}
            </a>
          </WhiteText>
        </BottomLeft>
      </HoverDiv>
    </ResponsiveDiv>
  );
};

export default Image;
