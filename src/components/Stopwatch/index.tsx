import { useState, useEffect } from "react";
import { timeInSeconds } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import Clock from "./Clock";
import styles from "./Stopwatch.module.scss";

interface Props {
  selecionado: ITarefa | undefined;
  onTaskComplete: () => void;
}

export default function Stopwatch({ selecionado, onTaskComplete }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(timeInSeconds(selecionado.tempo));
    }
  }, [selecionado]);

  function countdown(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTempo(counter - 1);
        return countdown(counter - 1);
      }
      onTaskComplete()
    }, 1000);
  }

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>
        Escolha um card e inicie o cronometro <br />
      </p>
      <div className={styles.relogioWrapper}>
        <Clock tempo={tempo} />
      </div>
      <Button
        onClick={() => {
          countdown(tempo);
        }}
      >
        Começar!
      </Button>
    </div>
  );
}
