import React, { useState } from "react";
import { FormBuilder, FormContextProvider, Field } from "../FormBuilder";
import { useFavorites } from "../../hooks/favorites";
import { Modal, Input, AutoComplete } from "antd";
import { FormFieldLabel, Br } from "../GenericStyles";
import { addFavoriteSchema } from "./schema";

const AddFavoriteForm = ({ data, onSubmit, visible, hide }) => {
  const favorites = useFavorites();
  const [customName, setCustomName] = useState("");
  const lists = Object.keys(favorites).map((value) => ({ value }));

  return (
    <FormBuilder
      initialValues={{ list: "", descripiton: "", image: data }}
      validationSchema={addFavoriteSchema}
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
              as={AutoComplete}
              style={{ width: "100%" }}
              placeholder="Select List or Create new"
              size="large"
              onSelect={(v) =>
                setFieldValue(
                  "description",
                  favorites[v] ? favorites[v].description : ""
                )
              }
              onSearch={setCustomName}
              options={lists.filter(
                (l) =>
                  l.value.toLowerCase().indexOf(customName.toLowerCase()) > -1
              )}
            ></Field>
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
