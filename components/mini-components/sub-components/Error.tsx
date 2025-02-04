import React from "react";
import { useFormikContext } from "formik";

type ErrorProps = {
  name: string;
};

const Error: React.FC<ErrorProps> = ({ name }):React.JSX.Element => {
  const { errors, touched } = useFormikContext<any>();
  return <>{ errors[name] && touched[name] ? <span></span> : null}</>;
};

export default Error;
