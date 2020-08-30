import React, { memo } from "react";
import { useFormikContext } from "formik";

// To be used only in FormBuilder
const FormContextProvider = memo(({ children }) => {
  const context = useFormikContext();
  return <React.Fragment>{children(context)}</React.Fragment>;
});

export default FormContextProvider;
