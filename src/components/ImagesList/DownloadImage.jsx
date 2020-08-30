import React from "react";
import { useAsyncCallback } from "../../hooks/async";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { downloadImage } from "../../utils/unsplash";

const DownloadImage = ({ data }) => {
  const { callback: download, isLoading } = useAsyncCallback(
    () => downloadImage(data),
    [data]
  );
  return (
    <Button
      shape="round"
      ghost
      title="Download"
      loading={isLoading}
      icon={<DownloadOutlined></DownloadOutlined>}
      onClick={download}
    ></Button>
  );
};

export default DownloadImage;
