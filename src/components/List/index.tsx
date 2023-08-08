import React from "react";

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
    <aside>
      <h2>Timers do Dia</h2>
      <ul>
        {tarefas.map((item, index) => {
          return (
            <li key={index}>
              <h3>{item.tarefa}</h3>
              <span>{item.tempo}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default List;
