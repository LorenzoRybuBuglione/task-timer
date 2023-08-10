import styles from "./Clock.module.scss";

interface Props {
  tempo: number | undefined;
}
export default function Clock({ tempo = 0 }: Props) {
  const hours = Math.floor(tempo / 3600);
  const minutes = Math.floor(tempo / 60) % 60;
  const seconds = tempo % 60;

  const hoursString = String(hours);
  const [minuteOne, minuteTwo] = String(minutes).padStart(2, "0");
  const [secondOne, secondTwo] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={styles.relogioNumero}>{hoursString}</span>
      <span className={styles.relogioDivisao}>:</span>
      <span className={styles.relogioNumero}>{minuteOne}</span>
      <span className={styles.relogioNumero}>{minuteTwo}</span>
      <span className={styles.relogioDivisao}>:</span>
      <span className={styles.relogioNumero}>{secondOne}</span>
      <span className={styles.relogioNumero}>{secondTwo}</span>
    </>
  );
}
