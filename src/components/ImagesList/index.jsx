import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { getPhotos } from "../../utils/unsplash";
import { CentredDiv, PaddedContainer } from "../GenericStyles";
import Images from "./Images";

const ImagesList = ({ setFavorite }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const loadNextPhotos = useCallback(() => {
    const retVal = getPhotos(page, 10).then((r) =>
      setImages([...images, ...r])
    );
    setPage(page + 1);
    return retVal;
  }, [images, page]);

  const refresh = useCallback(async () => {
    await setPage(0);
    await setImages([]);
    return loadNextPhotos();
  }, [loadNextPhotos]);

  useEffect(() => {
    loadNextPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PaddedContainer>
      <InfiniteScroll
        dataLength={images.length}
        next={loadNextPhotos}
        hasMore={true}
        loader={
          <PaddedContainer>
            <CentredDiv>
              <Loading3QuartersOutlined
                spin
                size="large"
                style={{ fontSize: "40px" }}
              ></Loading3QuartersOutlined>
            </CentredDiv>
          </PaddedContainer>
        }
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshContent={
          <CentredDiv>&#8595; Pull down to refresh</CentredDiv>
        }
        releaseToRefreshContent={
          <CentredDiv>&#8593; Release to refresh</CentredDiv>
        }
        scrollThreshold="20px"
      >
        <Images images={images} setFavorite={setFavorite}></Images>
      </InfiniteScroll>
    </PaddedContainer>
  );
};

export default ImagesList;
