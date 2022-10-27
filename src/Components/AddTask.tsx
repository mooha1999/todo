import { ChangeEvent, FormEvent, useState } from "react";
import "./AddTask.css";

const AddTask = (props: { addTask: (task: string) => void }) => {
  const [task, setTask] = useState<string>('');

  const changeEventHandler = (event: ChangeEvent) =>
    setTask((event.target as HTMLInputElement).value);

  const btnClickHandler = () => {
    if(task && task.trim() !== '')
      props.addTask(task.trim());
      setTask('');
  }

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    btnClickHandler();
  }

  return (
    <div className="add-task">
      <form action="submit" className="input-container" onSubmit={submitHandler}>
        <i onClick={btnClickHandler} className="fa fa-book icon"></i>
        <input
          type={"text"}
          className="input-field"
          placeholder="Add todo"
          value={task}
          onChange={changeEventHandler}
        />
      </form>
      <button onClick={btnClickHandler} className="btn">
        Add New Task
      </button>
    </div>
  );
};

export default AddTask;
