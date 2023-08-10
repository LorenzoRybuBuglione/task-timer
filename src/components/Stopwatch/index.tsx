import { useState, useEffect } from "react";
import { timeInSeconds } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import Clock from "./Clock";
import styles from "./Stopwatch.module.scss";

interface Props {
  selecionado: ITarefa | undefined;
}

export default function Stopwatch({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(timeInSeconds(selecionado.tempo));
    }
  }, [selecionado]);

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>
        Escolha um card e inicie o cronometro <br />
        Tempo: {tempo}
      </p>
      <div className={styles.relogioWrapper}>
        <Clock />
      </div>
      <Button>Começar!</Button>
    </div>
  );
}
