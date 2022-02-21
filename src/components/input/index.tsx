import styles from "./styles.module.scss";

interface InputAuthProps {
  type: string;
  name: string;
  nameLabel: string;
}

export const InputAuth = ({ name, nameLabel, type }: InputAuthProps) => {
  return (
    <div className={styles.container}>
      <input type={type} name={name} />
      <label>{nameLabel}</label>
    </div>
  );
};
