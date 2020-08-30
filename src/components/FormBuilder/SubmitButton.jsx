import React, { memo } from "react";
import { useFormikContext } from "formik";
import { Button } from "antd";

// To be used only in FormBuilder
export default memo(({ disabled, loading, children, ...props }) => {
  const { submitForm, isSubmitting } = useFormikContext();

  return (
    <Button
      type="primary"
      loading={isSubmitting || loading}
      disabled={disabled || isSubmitting || loading}
      onClick={submitForm}
      {...props}
    >
      {children}
    </Button>
  );
});
