import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import styles from "./Formulary.module.scss";
import { v4 as uuidv4 } from "uuid";

function Formulary({
  setTarefas,
}: {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00:00");

  function addTask(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() },
    ]);
    setTarefa("");
    setTempo("00:00:00");
  }

  return (
    <form className={styles.novaTarefa} onSubmit={(evento) => addTask(evento)}>
      <div className={styles.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo timer</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(evento) => setTarefa(evento.target.value)}
          placeholder="Qual o nome do timer?"
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          name="tempo"
          id="tempo"
          step="1"
          min="00:00:01"
          max="01:30:00"
          value={tempo}
          onChange={(evento) => setTempo(evento.target.value)}
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

export default Formulary;
