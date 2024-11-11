import React from "react";

import css from "./Error.module.css";
import { selectError } from "../../redux/contacts/selectors";

const Error = () => {
  const error = useSelector(selectError);
  return <p className={css.error}>{error}</p>;
};

export default Error;
