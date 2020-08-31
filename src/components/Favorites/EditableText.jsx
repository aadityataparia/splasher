import React, { useState, useCallback } from "react";
import { Input, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

const EditableText = ({ value, onSubmit }) => {
  const [v, setV] = useState(value);
  const [editable, setEditable] = useState(false);
  const submit = useCallback(() => {
    if (v.length > 1) {
      setEditable(false);
      onSubmit(v);
    }
  }, [onSubmit, v]);

  return editable ? (
    <React.Fragment>
      <Input
        value={v}
        onChange={(e) => setV(e.target.value)}
        onBlur={submit}
      ></Input>
    </React.Fragment>
  ) : (
    <React.Fragment>
      {v}{" "}
      <Button type="link" onClick={() => setEditable(true)}>
        <EditOutlined></EditOutlined>
      </Button>
    </React.Fragment>
  );
};

export default EditableText;
