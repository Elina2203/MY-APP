import { useState } from "react";
import { CheckIcon } from "../CheckIcon/CheckIcon";
import "./Checkbox.css";

export const Checkbox = ({ done, handleState }) => {
  const [checked, setChecked] = useState(done);

  const handleClick = () => {
    handleState(!checked);
    setChecked(!checked);
  };
  return (
    <span
      className={!checked ? "checkbox" : "checkbox--checked"}
      onClick={handleClick}
    >
      <input type="checkbox" className="checkbox__input" />
      <CheckIcon checked={checked} />
    </span>
  );
};
