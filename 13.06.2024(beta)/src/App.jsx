import { useState } from "react";
import Tabs from "./components/Navigation/Tabs.jsx";
import Task1 from "./components/Task1/Task1.jsx";
import Task2 from "./components/Task2/Task2.jsx";
import Task3 from "./components/Task3/Task3.jsx";
import Task4 from "./components/Task4/Task4.jsx";
import Task5 from "./components/Task5/Task5.jsx";
import Task6 from "./components/Task6/Task6.jsx";

export default function App() {
  const [tab, setTab] = useState("");
  return (
    <>
      <Tabs active={tab} onChange={(changed) => setTab(changed)} />
      {tab === "task1" && <Task1 />}
      {tab === "task2" && <Task2 />}
      {tab === "task3" && <Task3 />}
      {tab === "task4" && <Task4 />}
      {tab === "task5" && <Task5 />}
      {tab === "task6" && <Task6 />}
    </>
  );
}
