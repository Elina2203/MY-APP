import { useContext } from "react";
import { useModal } from "react-modal-hook";
import { EditingContext } from "../../providers/EditingProvider";
import { CategoryForm } from "../CategoryForm/CategoryForm";
import { Delete } from "../Delete/Delete";
import { EditCategory } from "../EditCategory/EditCategory";
import { Modal } from "../Modal/Modal";
import "./Category.css";

export const Category = ({ id, title, color, setActiveCategoryId, isActive, deleteCategory }) => {
  const { isEditing } = useContext(EditingContext);
  const handleClick = () => {
    setActiveCategoryId(!isActive ? id : undefined);
  };
  const handleDelete = () => {
    deleteCategory(id);
  };

  const [showCategoryModal, hideCategoryModal] = useModal(() => {
    const onSubmit = () => {
      hideCategoryModal();
      // closeMenu();
    };
    const currentCategory = {
      id: id,
      title: title,
      color: color,
    };
    return (
      <Modal title="Add Category" closeModal={hideCategoryModal}>
        <CategoryForm onSubmit={onSubmit} currentCategory={currentCategory} />
      </Modal>
    );
  });

  return (
    <div className="category">
      <div className={`category__action-item-back ${isEditing && "category__action-item-back--flipped"}`}>
        <Delete onClick={handleDelete} />
      </div>
      <div className="category__box" style={{ backgroundColor: color }} onClick={handleClick}>
        <div className="category__title">{title}</div>
      </div>
      <div className={`category__edit-item-back ${isEditing && "category__edit-item-back--flipped"}`}>
        <EditCategory onClick={showCategoryModal}></EditCategory>
      </div>
    </div>
  );
};
