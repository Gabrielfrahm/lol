import styled, { css } from "styled-components";

interface IButtonProps {
  color: string;
}

export const Button = styled.button<IButtonProps>`
  width: 95px;
  height: 2rem;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
`;
