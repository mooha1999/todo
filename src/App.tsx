import { useEffect, useState } from "react";
import AddTask from "./Components/AddTask";
import Row from "./Components/Row";
const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    const ts = localStorage.getItem("tasks");
    if (ts) setTasks(JSON.parse(ts));
  }, []);

  window.onbeforeunload = () =>
    localStorage.setItem("tasks", JSON.stringify(tasks));

  const addTask = (task: string) => setTasks([...tasks, task]);

  const removeTask = (index: number) =>
    setTasks((current) => current.filter((_, i) => i !== index));

  const editTask = (index: number, task: string) => {
    tasks[index] = task;
    setTasks(tasks);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Todo Input</h1>
      <AddTask addTask={addTask} />
      <ul className="tasks">
        {tasks.map((task, index) => (
          <Row
            editTask={editTask}
            removeTask={removeTask}
            index={index}
            task={task}
            key={Math.random()}
          />
        ))}
      </ul>
    </>
  );
};

export default App;
