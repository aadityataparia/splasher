import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import BigLoading from "../BigLoading";
import { getPhotos, searchPhotos } from "../../utils/unsplash";
import { PaddedContainer, Br } from "../GenericStyles";
import Images from "./Images";
import { uniqBy } from "lodash";
import { Input } from "antd";

const ImagesList = ({ setFavorite }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const loadNextPhotos = useCallback(
    (images, page) => {
      setPage(page);
      const retVal = (query
        ? searchPhotos(query, page, 10)
        : getPhotos(page, 10)
      ).then((r) => setImages([...images, ...r]));
      return retVal;
    },
    [query]
  );

  const refresh = useCallback(() => loadNextPhotos([], 1), [loadNextPhotos]);

  const next = useCallback(() => {
    loadNextPhotos(images, page + 1);
  }, [images, loadNextPhotos, page]);

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <PaddedContainer>
      <Input.Search
        placeholder="Search Images"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        size="large"
        style={{ width: "100%", maxWidth: 400 }}
      />
      <Br></Br>
      <InfiniteScroll
        dataLength={images.length}
        next={next}
        hasMore={true}
        loader={<BigLoading></BigLoading>}
        scrollThreshold="20px"
      >
        <Images
          images={uniqBy(images, "id")}
          setFavorite={setFavorite}
        ></Images>
      </InfiniteScroll>
    </PaddedContainer>
  );
};

export default ImagesList;
