import { ChangeEvent, useState } from "react";
import "./Row.css";
const Row = (props: {
  task: string;
  index: number;
  removeTask: (i: number) => void;
  editTask: (i: number, t: string) => void;
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const [task, setTask] = useState<string>(props.task);

  const removeTaskHandler = () => props.removeTask(props.index);

  const changeHandler = (event: ChangeEvent) => {
    setTask((event.target as HTMLInputElement).value);
  };

  const editHandler = () => setIsEdit(!isEdit)

  const keyDownHandler = (event: any) => {
    if(event.key === 'Enter')
      editHandler();
  }

  const finishHandler = () => setIsFinish(!isFinish);


  return (
    <li className="task-item">
      <div className="task-container">
        {isEdit ? (
          <input
            style={{ width: "100%", height: '50px' }}
            value={task}
            onChange={changeHandler}
            onKeyDown={keyDownHandler}
          />
        ) : (
          <p className={`task-text ${isFinish && "finish"}`}>{task}</p>
        )}
      </div>
      <div className="icons-container">
        <i
          onClick={finishHandler}
          className={`fa fa-check-square-o ${!isFinish && "fa-square-o"}`}
        ></i>
        <i onClick={editHandler} className="fa fa-pencil"></i>
        <i onClick={removeTaskHandler} className="fa fa-trash"></i>
      </div>
    </li>
  );
};

export default Row;
