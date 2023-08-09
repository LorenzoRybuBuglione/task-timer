import React, { useState } from "react";
import Formulary from "../components/Formulary";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import { ITarefa } from "../types/tarefa";
import styles from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);

  return (
    <div className={styles.AppStyle}>
      <Formulary setTarefas={setTarefas}></Formulary>
      <List tarefas={tarefas} />
      <Stopwatch />
    </div>
  );
}

export default App;
