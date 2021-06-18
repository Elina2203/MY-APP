import { useContext, useEffect, useRef } from "react";
import { EditingContext } from "../../providers/EditingProvider";
import "./Input.css";

export const Input = ({ text, handleText, newTask }) => {
  const { setNewTaskId, isEditing } = useContext(EditingContext);
  const inputRef = useRef(null);
  const textRef = useRef(text);
  const handleInput = (e) => {
    handleText(e.target.innerText);
  };
  useEffect(() => {
    if (newTask) {
      inputRef.current.focus();
      setNewTaskId(undefined);
    }
  }, [newTask, setNewTaskId]);
  return (
    <div
      contentEditable={!isEditing}
      className={`input ${isEditing && "input--disabled"}`}
      suppressContentEditableWarning
      onInput={handleInput}
      ref={inputRef}
    >
      {textRef.current}
    </div>
  );
};
