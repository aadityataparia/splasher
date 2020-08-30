import React, { useState } from "react";
import { useAsyncCallback } from "../hooks/async";

const PropsRefresher = ({ as: Component, componentProps, refresh }) => {
  const [props, setProps] = useState(componentProps);
  const { isLoading, callback } = useAsyncCallback(
    () => refresh(props).then(setProps),
    [props]
  );

  return (
    <Component {...props} isLoading={isLoading} refresh={callback}></Component>
  );
};

export default PropsRefresher;
