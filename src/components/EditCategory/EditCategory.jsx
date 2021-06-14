import "./EditCategory.css";
import { ReactComponent as SvgPencil } from "../../assets/pencil.svg";

export const EditCategory = ({ onClick }) => {
  return (
    <span className="edit-category" onClick={onClick}>
      <SvgPencil />
    </span>
  );
};
