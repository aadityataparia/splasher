import React, { memo, useCallback, useEffect } from "react";
import { Formik, useFormikContext } from "formik";
import { debounce, noop } from "lodash";
import styled from "styled-components";
import Field from "./Field";
import SubmitButton from "./SubmitButton";
import ResetButton from "./ResetButton";
import FormValueProvider from "./FormValueProvider";
import FormContextProvider from "./FormContextProvider";

const OnChangeSink = memo(({ onChange }) => {
  const { values, errors } = useFormikContext();

  const _onChange = useCallback(
    debounce((v) => onChange(v), 100),
    [onChange]
  );

  useEffect(() => {
    const isValid =
      Object.keys(errors).filter((k) => errors[k] !== undefined).length < 1;
    if (isValid) {
      _onChange(values);
    } else {
      _onChange(null);
    }
  }, [_onChange, values, errors]);

  return null;
});

const Form = styled.form``;
const Div = styled.div``;
// Works with inputs from ./form folder
const FormBuilder = memo(
  ({
    children = null,
    "data-is-field": isField,
    onChange = null,
    style = {},
    onSubmit,
    ...formikProps
  }) => {
    const Component = isField ? Form : Div;
    const _onSubmit = isField ? noop : onSubmit;

    return (
      <Formik onSubmit={_onSubmit} {...formikProps}>
        {({ handleReset, handleSubmit }) => (
          <Component
            style={style}
            onReset={handleReset}
            onSubmit={handleSubmit}
          >
            {children}
            {onChange && <OnChangeSink onChange={onChange} />}
          </Component>
        )}
      </Formik>
    );
  }
);

export {
  FormBuilder,
  Field,
  SubmitButton,
  ResetButton,
  FormValueProvider,
  FormContextProvider,
};
