import { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import { Task } from "../Task/Task";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { reorder } from "../../helpers/reorder";

// const reorder = (list, startIndex, endIndex) => {
//   const result = [...list];
//   const [current] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, current);
//   return result;
// };

export const TodoList = ({ activeCategoryId }) => {
  const { todoList, setTodoList } = useContext(DataContext);

  const updateList = (index, key, value) => {
    todoList[index][key] = value;
    setTodoList([...todoList]);
  };
  const deleteTask = (id) => {
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
  };
  const renderItem = (item, key) => {
    if (activeCategoryId && activeCategoryId !== item.category) return null;
    return (
      <Draggable key={item.id} draggableId={item.id} index={key}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Task key={item.id} index={key} {...item} updateList={updateList} deleteTask={deleteTask} />
          </div>
        )}
      </Draggable>
    );
  };
  const onDragEnd = ({ source, destination }) => {
    const newList = reorder(todoList, source.index, destination.index);
    setTodoList(newList);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {todoList.map(renderItem)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
