import Button from "../Button";
import Clock from "./Clock";
import styles from "./Stopwatch.module.scss"

export default function Stopwatch() {
  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={styles.relogioWrapper}>
        <Clock />
      </div>
      <Button>Começar!</Button>
    </div>
  );
}
