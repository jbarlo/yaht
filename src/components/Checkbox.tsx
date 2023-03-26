"use client";

import { CHECKBOX } from "@/constants";
import { FC } from "react";
import styled from "styled-components";

const colors = {
  selected: { main: "#06D6A0", hovered: "#05B384", clicked: "#048B67" },
  unselected: { main: "#CCA3C8", hovered: "#BF88BA", clicked: "#A960A3" },
};

const StyledButton = styled.button<{
  isSelected: boolean;
}>`
  & {
    border: 0px;
    width: ${CHECKBOX.size}px;
    height: ${CHECKBOX.size}px;
    border-radius: 6px;
    transition: ease background-color 0.2s,
      cubic-bezier(0.26, 0, 0.66, 1) margin-top 0.1s,
      cubic-bezier(0.26, 0, 0.66, 1) height 0.6s;
    background-color: ${(props) =>
      props.isSelected ? colors.selected.main : colors.unselected.main};
    :hover {
      background-color: ${(props) =>
        props.isSelected ? colors.selected.hovered : colors.unselected.hovered};
    }
    :active {
      margin-top: ${CHECKBOX.size - CHECKBOX.clickedSize}px;
      height: ${CHECKBOX.clickedSize}px;
      transition: cubic-bezier(0.26, 0, 0.66, 1) height 0.2s;
      background-color: ${(props) =>
        props.isSelected ? colors.selected.clicked : colors.unselected.clicked};
    }
    cursor: pointer;
  }
`;

export interface CheckboxProps {
  isSelected?: boolean;
  onChange?: () => any;
}
const Checkbox: FC<CheckboxProps> = ({
  isSelected = false,
  onChange,
}: CheckboxProps) => (
  <StyledButton isSelected={isSelected} onClick={() => onChange?.()} />
);
export default Checkbox;
