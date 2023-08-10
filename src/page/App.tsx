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

  function onTaskComplete() {
    if (selecionado) {
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
      setSelecionado(undefined);
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Formulary setTarefas={setTarefas}></Formulary>
      <List tarefas={tarefas} selecionaTarefa={selectTask} />
      <Stopwatch selecionado={selecionado} onTaskComplete={onTaskComplete} />
    </div>
  );
}

export default App;
