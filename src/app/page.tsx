import { Row, StyledComponentsRegistry } from "@/components";
import { CHECKBOX } from "@/constants";
import { map, range } from "lodash";

const initialChecks = {
  "1": false,
  "2": false,
  "3": false,
  "4": false,
  "5": false,
  "6": false,
  "7": false,
};

const Mask = () => (
  <>
    {/* Unclickable top mask */}
    <div
      style={{
        position: "fixed",
        height: "10vh",
        width: "100%",
        top: 0,
        backgroundColor: "#E2CAE0",
      }}
    />
    {/* Gradient mask */}
    <div
      style={{
        position: "fixed",
        height: "80vh",
        width: "100%",
        top: "10vh",
        backgroundColor: "#E2CAE0",
        WebkitMaskImage:
          "linear-gradient(#FFFF 0%, #FFF0 20%, #FFF0 80%, #FFFF 100%)",
        pointerEvents: "none",
      }}
    />
    {/* Unclickable bottom mask */}
    <div
      style={{
        position: "fixed",
        height: "10vh",
        width: "100%",
        bottom: 0,
        backgroundColor: "#E2CAE0",
      }}
    />
  </>
);

export default function Home() {
  return (
    <StyledComponentsRegistry>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: CHECKBOX.gap,
          // padding to manually center vertically so scroll works better with
          // multiple rows
          paddingTop: `calc(30vh - ${CHECKBOX.size}px / 2)`,
          paddingBottom: `calc(30vh - ${CHECKBOX.size}px / 2)`,
        }}
      >
        <Mask />
        {map(range(52), (i) => (
          <Row key={i} initialChecks={initialChecks} />
        ))}
      </div>
    </StyledComponentsRegistry>
  );
}
