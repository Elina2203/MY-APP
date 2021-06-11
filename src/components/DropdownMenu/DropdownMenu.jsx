import { nanoid } from "nanoid";
import { useModal } from "react-modal-hook";
import { useContext } from "react";
import { ReactComponent as SvgNewCategory } from "../../assets/newcategory.svg";
import { ReactComponent as SvgNewTask } from "../../assets/newtask.svg";
import { DEFAULT_NEW_TASK } from "../../constants";
import { DataContext } from "../../providers/DataProvider";
import "./DropdownMenu.css";
import { Modal } from "../Modal/Modal";
import { CategoryForm } from "../CategoryForm/CategoryForm";

export const DropdownMenu = ({ closeMenu }) => {
  const { setTodoList, todoList } = useContext(DataContext);
  const addTask = () => {
    const id = nanoid();
    const newList = [{ ...DEFAULT_NEW_TASK, id }, ...todoList];
    setTodoList(newList);
    closeMenu();
  };

  const [showCategoryModal, hideCategoryModal] = useModal(() => {
    const onSubmit = () => {
      hideCategoryModal();
      closeMenu();
    };
    return (
      <Modal title="Add Category" closeModal={hideCategoryModal}>
        <CategoryForm onSubmit={onSubmit} />
      </Modal>
    );
  });
  return (
    <div className="dropdown-menu">
      <div className="dropdown-menu__item">
        <button className="dropdown-menu__button" onClick={addTask}>
          <span className="dropdown-menu__button-span">
            <SvgNewTask />
            <div className="dropdown-menu__label">Task</div>
          </span>
        </button>
      </div>
      <div className="dropdown-menu__item">
        <button className="dropdown-menu__button" onClick={showCategoryModal}>
          <span className="dropdown-menu__button-span">
            <SvgNewCategory />
            <span className="dropdown-menu__label">Category</span>
          </span>
        </button>
      </div>
    </div>
  );
};
