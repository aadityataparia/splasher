import React, { useCallback } from "react";
import { Popconfirm, Button } from "antd";
import { DeleteOutlined, WarningFilled } from "@ant-design/icons";
import { useFavorites, removeList } from "../../hooks/favorites";

const DeleteListButton = ({ list, setFavorite }) => {
  const favorites = useFavorites();

  const _deleteList = useCallback(
    () => setFavorite(removeList(favorites, list)),
    [favorites, list, setFavorite]
  );

  return (
    <Popconfirm
      title={`Delete list ${list}?`}
      okText="Yes"
      cancelText="No"
      placement="topRight"
      onConfirm={_deleteList}
      icon={<WarningFilled></WarningFilled>}
    >
      <Button type="ghost" icon={<DeleteOutlined></DeleteOutlined>}>
        Delete
      </Button>
    </Popconfirm>
  );
};

export default DeleteListButton;
