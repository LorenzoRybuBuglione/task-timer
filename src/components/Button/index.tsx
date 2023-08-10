import styles from "./Button.module.scss";

interface Props {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Button({ children, type, onClick }: Props) {
  let typeCheck = type;
  if (type === undefined) {
    typeCheck = "button";
  }

  return (
    <button type={typeCheck} className={styles.botao} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
