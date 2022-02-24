import { useState } from "react";
import styles from "./styles.module.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
interface InputAuthProps {
  type: string;
  name: string;
  nameLabel: string;
}

export const InputAuth = ({ name, nameLabel, type }: InputAuthProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.container}>
      <input
        type={showPassword ? "text" : type}
        name={name}
        placeholder=" "
        autoComplete="off"
      />
      <label>{nameLabel}</label>
      {type === "password" &&
        (!showPassword ? (
          <AiOutlineEye
            size={23}
            color="#a5a5a5"
            className={styles.icon}
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <AiOutlineEyeInvisible
            size={23}
            color="#a5a5a5"
            className={styles.icon}
            onClick={() => setShowPassword(!showPassword)}
          />
        ))}
    </div>
  );
};
