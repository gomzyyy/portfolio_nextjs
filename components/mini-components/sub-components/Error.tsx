import React from "react";
import { useFormikContext } from "formik";

type FormValues = {
  name: string;
  email: string;
};

type ErrorProps = {
  name: keyof FormValues;
};

const Error: React.FC<ErrorProps> = ({ name }): React.JSX.Element => {
  const { errors, touched } = useFormikContext<FormValues>();
  return <>{errors[name] && touched[name] ? <span>{errors[name]}</span> : null}</>;
};

export default Error;