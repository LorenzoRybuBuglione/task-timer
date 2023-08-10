import React, { useState } from "react";
import Formulary from "../components/Formulary";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import { ITarefa } from "../types/tarefa";
import styles from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selectTask(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  return (
    <div className={styles.AppStyle}>
      <Formulary setTarefas={setTarefas}></Formulary>
      <List tarefas={tarefas} selecionaTarefa={selectTask} />
      <Stopwatch selecionado={selecionado} />
    </div>
  );
}

export default App;
