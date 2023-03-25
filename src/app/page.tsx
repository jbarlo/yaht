import { Row } from "@/components";

const initialChecks = {
  "1": false,
  "2": false,
  "3": false,
  "4": false,
  "5": false,
  "6": false,
  "7": false,
};

export default function Home() {
  return <Row initialChecks={initialChecks} />;
}
