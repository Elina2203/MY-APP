import { useRef } from "react";
import "./Input.css";

export const Input = ({ text, handleText, onFocus, onBlur }) => {
  const textRef = useRef(text);
  const handleInput = (e) => {
    handleText(e.target.innerText);
  };
  return (
    <div>
      <div
        contentEditable
        className="input"
        suppressContentEditableWarning
        onInput={handleInput}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {textRef.current}
      </div>
    </div>
  );
};
