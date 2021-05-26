import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Task } from "./components/Task/Task";
import { ButtonCircle } from "./components/ButtonCircle/ButtonCircle";
import { nanoid } from "nanoid";
import { useKeyPress } from "react-use";
const todoList = JSON.parse(localStorage.getItem("todolist"));

function App() {
  const [list, setList] = useState(todoList || []);
  const [focusedItem, setFocusedItem] = useState();
  console.log(focusedItem);

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
  };
  const deleteTask = () => {
    const newList = list.filter((item) => item.id !== focusedItem);
    setList(newList);
  };
  const renderItem = (item, key) => (
    <Task
      key={item.id}
      index={key}
      {...item}
      updateList={updateList}
      setFocusedItem={setFocusedItem}
    />
  );
  const [isPressed] = useKeyPress("Delete");
  const deleteTaskEffect = () => {
    console.log(isPressed, focusedItem);
    if (!focusedItem || !isPressed) return;
    deleteTask();
  };

  useEffect(deleteTaskEffect, [isPressed]);
  return (
    <div className="app">
      <div className="app__box">
        <div className="app__tasks">{list.map(renderItem)}</div>
      </div>
      <ButtonCircle onClick={addTask} />
    </div>
  );
}

export default App;
