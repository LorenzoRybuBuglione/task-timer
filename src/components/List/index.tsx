import Item from "./Item";
import styles from "./List.module.scss";
import { ITarefa } from "../../types/tarefa";

function List({ tarefas }: { tarefas: ITarefa[] }) {
  return (
    <aside className={styles.listaTarefas}>
      <h2>
        Timers do Dia
      </h2>
      <ul>
        {tarefas.map((item, index) => {
          return <Item key={index} {...item} />;
        })}
      </ul>
    </aside>
  );
}

export default List;
