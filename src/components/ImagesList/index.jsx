import React, { useState, useEffect, useCallback } from "react";
import Masonry from "react-masonry-component";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { getPhotos } from "../../utils/unsplash";
import { CentredDiv, PaddedContainer } from "../GenericStyles";
import Image from "./Image";

const masonryOptions = {
  transitionDuration: 100,
};

const ImagesList = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const loadNextPhotos = useCallback(() => {
    const retVal = getPhotos(page, 20).then((r) =>
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
        loader={<Loading3QuartersOutlined spin></Loading3QuartersOutlined>}
        endMessage={
          <p>
            <b>Yay! You have seen it all</b>
          </p>
        }
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshContent={
          <CentredDiv>&#8595; Pull down to refresh</CentredDiv>
        }
        releaseToRefreshContent={
          <CentredDiv>&#8593; Release to refresh</CentredDiv>
        }
      >
        <Masonry options={masonryOptions}>
          {images.map((i) => (
            <Image data={i}></Image>
          ))}
        </Masonry>
      </InfiniteScroll>
    </PaddedContainer>
  );
};

export default ImagesList;
