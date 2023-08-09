import React from "react";
import styles from "./Button.module.scss";

function Button(props: { children: string }) {
  return <button className={styles.botao}>{props.children}</button>;
}

export default Button;
