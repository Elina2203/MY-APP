import "./CategoryItem.css";
// import { categoryList } from "../../data/categoryList";
import { CategoryDot } from "../CategoryDot/CategoryDot";
import { CheckIcon } from "../CheckIcon/CheckIcon";
// import { CloseButton } from "../CloseButton/CloseButton";

export const CategoryItem = ({ id, title, color, isActive, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <div className="category-item" onClick={handleClick}>
      <div className="category-item--checkbox">
        <CheckIcon checked={isActive} />
      </div>
      <div className="category-item__title">{title}</div>
      <div className="category-item__dot">
        <CategoryDot color={color} />
      </div>
    </div>
  );
};
