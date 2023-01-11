import { useState } from "react";
import "./boards.scss";

const status = {
  COMPLETED: "COMPLETED",
  UNCOMPLETED: "UNCOMPLETED",
};

const listTaskDefault = [
  {
    id: 1,
    title: "Design team meeting",
    expireData: "",
    status: status.COMPLETED,
  },
  {
    id: 2,
    title: "Making Wireframes",
    expireData: "",
    status: status.UNCOMPLETED,
  },
  {
    id: 3,
    title: "Create UI elements",
    expireData: "",
    status: status.UNCOMPLETED,
  },
  {
    id: 4,
    title: "Meeting with Murman Khvadadze",
    expireData: "",
    status: status.UNCOMPLETED,
  },
];

const listTabs = [
  {
    id: 1,
    label: "All",
    value: "",
  },
  {
    id: 2,
    label: "Completed",
    value: status.COMPLETED,
  },
  {
    id: 3,
    label: "Uncompleted",
    value: status.UNCOMPLETED,
  },
];

function Board() {
  const [listTask, setListTask] = useState(listTaskDefault);
  const [tab, setTab] = useState(listTabs[0].value);

  const onTabClick = (value) => {
    setTab(value);
    setListTask(listTaskDefault.filter((i) => i.status === value));
  };

  const onTaskClick = (task) => {
    task.status = task.status === status.COMPLETED ? status.UNCOMPLETED : status.COMPLETED;
    const taskIndex = listTaskDefault.findIndex(i => i.id === task.id);
    const newList = listTaskDefault;
    newList[taskIndex] = task;
    setListTask(JSON.parse(JSON.stringify((newList))));
  };

  return (
    <div className="board">
      <div className="title">Board</div>
      <div className="tab">
        {listTabs.map((el) => (
          <div
            key={el.id}
            className={tab === el.value ? "active" : ""}
            onClick={() => onTabClick(el.value)}
          >
            {el.label}
          </div>
        ))}
      </div>
      <div className="content">
        {listTask.map((el) => (
          <div key={el.id}>
            <input
              type="checkbox"
              checked={el.status === status.COMPLETED}
              onChange={() => onTaskClick(el)}
            />
            <div className="label">{el.title}</div>
          </div>
        ))}
      </div>
      <div className="footer">
        <button>Add a task</button>
      </div>
    </div>
  );
}

export default Board;
