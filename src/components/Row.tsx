"use client";
import { CHECKBOX } from "@/constants";
import { every, map, some } from "lodash";
import { FC, useState } from "react";
import Checkbox from "./Checkbox";
import RowCheckbox, { RowCheckboxProps } from "./RowCheckbox";

export interface RowProps {
  initialChecks: Record<string, boolean>;
}
const RowProps: FC<RowProps> = ({ initialChecks }: RowProps) => {
  const [checks, setChecks] = useState(initialChecks);
  let totalState: RowCheckboxProps["state"] = "unselected";
  if (some(checks, (c) => c)) totalState = "selected";
  if (every(checks, (c) => c)) totalState = "full";
  return (
    <div style={{ display: "flex", gap: 40 }}>
      <span
        style={{ display: "flex", gap: CHECKBOX.gap, height: CHECKBOX.size }}
      >
        {map(checks, (c, key: keyof typeof initialChecks) => (
          <Checkbox
            key={key}
            isSelected={c}
            onChange={() =>
              setChecks((prev) => ({ ...prev, [key]: !prev[key] }))
            }
          />
        ))}
      </span>
      <span>
        <RowCheckbox state={totalState} />
      </span>
    </div>
  );
};

export default RowProps;
