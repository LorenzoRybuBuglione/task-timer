import Item from "./Item";
import styles from "./List.module.scss";
import { ITarefa } from "../../types/tarefa";

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function List({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={styles.listaTarefas}>
      <h2>Meus Timers</h2>
      <ul>
        {tarefas.map((item) => {
          return <Item key={item.id} {...item} selecionaTarefa={selecionaTarefa} />;
        })}
      </ul>
    </aside>
  );
}

export default List;
