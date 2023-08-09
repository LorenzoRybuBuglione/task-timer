import React from "react";
import Item from "./Item";
import styles from './List.module.scss';

function List() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "00:30:00",
    },
    {
      tarefa: "Baldur's Gate 3",
      tempo: "01:00:00",
    },
  ];
  return (
    <aside className={styles.listaTarefas}>
      <h2>Timers do Dia</h2>
      <ul>
        {tarefas.map((item, index) => {
          return (
            <Item key={index} {...item}/>
          );
        })}
      </ul>
    </aside>
  );
}

export default List;
