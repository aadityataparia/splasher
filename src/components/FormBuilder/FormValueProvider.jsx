import { useMemo, useRef } from "react";
import { useFormikContext } from "formik";
import { get } from "lodash";

// names of field to get value of
const ValueProvider = ({ names, children }) => {
  const { values } = useFormikContext();
  const valuesToGive = useRef({ __changed: [] });

  names.forEach((n) => {
    const newValue = get(values, n);
    if (newValue !== valuesToGive.current[n]) {
      valuesToGive.current[n] = newValue;
      valuesToGive.current.__changed = [];
    }
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _children = useMemo(() => children(valuesToGive.current), [
    children,
    valuesToGive.current.__changed,
  ]);

  return _children || null;
};

export default ValueProvider;
