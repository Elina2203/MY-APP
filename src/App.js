import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Task } from "./components/Task/Task";
import { ButtonCircle } from "./components/ButtonCircle/ButtonCircle";
import { nanoid } from "nanoid";
import { useKeyPress } from "react-use";
import { EditButton } from "./components/EditButton/EditButton";

const todoList = JSON.parse(localStorage.getItem("todolist"));

function App() {
  const [list, setList] = useState(todoList || []);

  const [isEditing, setEditing] = useState(false);

  const updateList = (index, key, value) => {
    list[index][key] = value;
    const newList = [...list];
    setList(newList);
    localStorage.setItem("todolist", JSON.stringify(newList));
  };
  const addTask = () => {
    const id = nanoid();
    const newList = [{ done: false, text: "", category: "", id }, ...list];
    setList(newList);
    localStorage.setItem("todolist", JSON.stringify(newList));
  };
  const deleteTask = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    localStorage.setItem("todolist", JSON.stringify(newList));
  };
  const renderItem = (item, key) => (
    <Task key={item.id} index={key} {...item} updateList={updateList} isEditing={isEditing} deleteTask={deleteTask} />
  );
  const [isPressed] = useKeyPress("Delete");

  const handleEditClick = () => {
    setEditing(!isEditing);
  };
  return (
    <div className="app">
      <div className="app__header">
        <h1 className="app__duedate">Today</h1>
        <EditButton isEditing={isEditing} onClick={handleEditClick} />
      </div>
      <div className="app__box">
        <div className="app__tasks">{list.map(renderItem)}</div>
      </div>
      <ButtonCircle onClick={addTask} />
    </div>
  );
}

export default App;
