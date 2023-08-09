import styles from "./Button.module.scss";

function Button(props: {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
}) {
  let type = props.type;
  if (props.type === undefined) {
    type = "button";
  }

  return (
    <button type={type} className={styles.botao}>
      {props.children}
    </button>
  );
}

export default Button;
