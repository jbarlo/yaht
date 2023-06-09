"use client";

import { CHECKBOX } from "@/constants";
import { FC } from "react";
import styled from "styled-components";

const colors = {
  selected: "#06D6A0",
  unselected: "#CCA3C8",
  full: "#FF9F1C",
};

const StyledDiv = styled.div<{
  state: keyof typeof colors;
}>`
  & {
    width: ${CHECKBOX.size}px;
    height: ${CHECKBOX.size}px;
    border-radius: 6px;
    transition: ease background-color 0.2s;
    background-color: ${(props) => colors[props.state]};
  }
`;

export interface RowCheckboxProps {
  state?: keyof typeof colors;
}
const RowCheckbox: FC<RowCheckboxProps> = ({
  state = "unselected",
}: RowCheckboxProps) => {
  return <StyledDiv state={state} />;
};

export default RowCheckbox;
