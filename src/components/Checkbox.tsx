"use client";

import { FC, useState } from "react";
import styled from "styled-components";

const colors = {
  selected: { main: "purple", hovered: "red" },
  unselected: { main: "blue", hovered: "green" },
};

const size = 40;
const StyledDiv = styled.div<{
  isSelected: boolean;
}>`
  & {
    width: ${size}px;
    height: ${size}px;
    border-radius: 6px;
    transition: ease background-color 0.2s;
    background-color: ${(props) =>
      props.isSelected ? colors.selected.main : colors.unselected.main};
    :hover {
      background-color: ${(props) =>
        props.isSelected ? colors.selected.hovered : colors.unselected.hovered};
    }
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
  <StyledDiv isSelected={isSelected} onClick={() => onChange?.()} />
);
export default Checkbox;
