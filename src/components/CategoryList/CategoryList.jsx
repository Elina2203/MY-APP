import { useContext } from "react";
import "./CategoryList.css";
import { DataContext } from "../../providers/DataProvider";
import { Category } from "../Category/Category";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { reorder } from "../../helpers/reorder";

export const CategoryList = ({ setActiveCategoryId, activeCategoryId }) => {
  const { categoryList, setCategoryList } = useContext(DataContext);

  const renderCategoryItem = (item, key) => {
    return (
      <Draggable key={item.id} draggableId={item.id} index={key}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Category
              {...item}
              key={item.id}
              setActiveCategoryId={setActiveCategoryId}
              isActive={item.id === activeCategoryId}
            />
          </div>
        )}
      </Draggable>
    );
  };

  const onDragEnd = ({ source, destination }) => {
    const newList = reorder(categoryList, source.index, destination.index);
    setCategoryList(newList);
  };

  return (
    <div className="category-list">
      <div className="category-list__head">Categories</div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {categoryList.map(renderCategoryItem)}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
