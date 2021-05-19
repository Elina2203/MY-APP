import { Checkbox } from "../Checkbox/Checkbox";
import { CategoryCircle } from "../CategoryCircle/CategoryCircle";
import { Input } from "../Input/Input";
import "./TaskComponent.css";

export const TaskComponent = () => {
  return (
    <ul>
      <li className="list__item">
        <Checkbox />
        <div className="list__text">
          <Input />
          <CategoryCircle />
        </div>
      </li>
    </ul>
  );
};
