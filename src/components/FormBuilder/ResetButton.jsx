import React, { memo } from "react";
import { useFormikContext } from "formik";
import { Button } from "antd";

// To be used only in FormBuilder
export default memo(({ disabled, ...props }) => {
  const { resetForm, isSubmitting } = useFormikContext();

  return (
    <Button
      disabled={disabled || isSubmitting}
      variant="outline-danger"
      onClick={resetForm}
      {...props}
    />
  );
});
