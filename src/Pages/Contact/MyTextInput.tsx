import { useField } from "formik";
import React from "react";

import { FormField, FormLabel, FormInput } from "./FormElements";

interface Props {
  name: string;
  label?: string;
}

const MyTextInput = (props: Props) => {
  const [field, meta] = useField(props.name);
  return (
    //!! turns error into boolean
    <FormField>
      <FormLabel>{props.label}</FormLabel>
      <FormInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <span style={{ color: "red" }}>{meta.error}</span>
      ) : null}
    </FormField>
  );
};

export default MyTextInput;
