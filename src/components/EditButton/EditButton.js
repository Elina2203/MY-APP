import { useContext } from "react";
import { EditingContext } from "../../providers/EditingProvider";
import "./EditButton.css";

export const EditButton = () => {
  const { isEditing, setEditing } = useContext(EditingContext);
  const handleClick = () => {
    setEditing(!isEditing);
  };
  return (
    <span className="edit-button" onClick={handleClick}>
      {!isEditing ? "Edit" : "Done"}
    </span>
  );
};
