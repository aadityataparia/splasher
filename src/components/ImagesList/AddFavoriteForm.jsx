import React, { useState, useCallback } from "react";
import { FormBuilder, FormContextProvider, Field } from "../FormBuilder";
import { useFavorites } from "../../hooks/favorites";
import { Modal, Select, Button, Input } from "antd";
import { FormFieldLabel, Br } from "../GenericStyles";
import { UnorderedListOutlined } from "@ant-design/icons";

const AddFavoriteForm = ({ data, onSubmit, visible, hide }) => {
  const favorites = useFavorites();
  const [customName, setCustomName] = useState("");
  const [lists, setLists] = useState(
    Object.keys(favorites).map((v) => ({
      value: v,
      ...favorites[v],
    }))
  );
  const createList = useCallback(() => {
    if (!lists.find((l) => l.value === customName))
      setLists([...lists, { value: customName }]);
  }, [customName, lists]);
  return (
    <FormBuilder
      initialValues={{ list: "", descripiton: "", image: data }}
      onSubmit={onSubmit}
    >
      <FormContextProvider>
        {({ submitForm, setFieldValue }) => (
          <Modal
            visible={visible}
            title="Add to favorite"
            okText={"Add"}
            onOk={submitForm}
            onCancel={hide}
          >
            <FormFieldLabel>List</FormFieldLabel>
            <Field
              name="list"
              as={Select}
              style={{ width: "100%" }}
              placeholder="Select List or Create new"
              prefix={<UnorderedListOutlined />}
              size="large"
              onChange={(v) =>
                setFieldValue(
                  "description",
                  favorites[v] ? favorites[v].description : ""
                )
              }
              showSearch
              onSearch={setCustomName}
              dropdownRender={(menu) => (
                <div>
                  {menu}
                  <Br></Br>
                  {customName.length > 1 && (
                    <Button type="link" onClick={createList}>
                      Create {customName}
                    </Button>
                  )}
                </div>
              )}
            >
              {lists.map((l) => (
                <Select.Option key={l.value} value={l.value}>
                  {l.value}
                </Select.Option>
              ))}
            </Field>
            <Br></Br>
            <FormFieldLabel>Description</FormFieldLabel>
            <Field
              name="description"
              type="description"
              as={Input}
              size="large"
              placeholder="Enter list description"
            />
          </Modal>
        )}
      </FormContextProvider>
    </FormBuilder>
  );
};

export default AddFavoriteForm;
