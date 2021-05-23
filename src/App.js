import { useState } from "react";
import "./App.css";
import { Task } from "./components/Task/Task";

const todoList = JSON.parse(localStorage.getItem("todoList"));

function App() {
  const [list, setList] = useState(todoList);

  const updateList = (index, done) => {
    list[index].done = done;
    setList([...list]);
    localStorage.setItem("todoList", JSON.stringify([...list]));
  };
  const updateListText = (index, text) => {
    list[index].text = text;
    setList([...list]);
    localStorage.setItem("todoList", JSON.stringify([...list]));
  };
  return (
    <div className="App">
      {list.map((item, key) => (
        <Task
          key={key}
          index={key}
          {...item}
          updateList={updateList}
          updateListText={updateListText}
        ></Task>
      ))}
    </div>
  );
}

export default App;
