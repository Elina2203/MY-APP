import { useState } from "react";
import "./App.css";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { TaskComponent } from "./components/TaskComponent/TaskComponent";

const todoList = [
  {
    done: false,
  },
  {
    done: false,
  },
  {
    done: false,
  },
  {
    done: false,
  },
  {
    done: true,
  },
];
function App() {
  const [list, setList] = useState(todoList);
  return (
    <div className="App">
      <AppHeader />
      {list.map((item) => (
        <div>
          {/* <Checkbox done={item.done} /> */}
          <TaskComponent />
        </div>
      ))}
    </div>
  );
}

export default App;
