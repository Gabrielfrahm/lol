import { ReactElement } from "react";

import { Button } from "./styles";

interface IButtonSocialProps {
  color: string;
  icon: ReactElement;
}

export const ButtonSocial = ({ icon, color }: IButtonSocialProps) => {
  return <Button color={color}>{icon}</Button>;
};
