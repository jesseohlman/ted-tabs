import { useState } from "react";
import styles from "./create.module.scss";
import ChordDiagram from "components/ChordDiagram";

export default function Create() {
  const [size, setSize] = useState("medium");
  const selectSize = () => {
    return (
      <select
        name="cars"
        id="cars"
        onChange={(value) => setSize(value.target.value)}
      >
        <option value="large">large</option>
        <option value="small">small</option>
        <option value="medium">medium</option>
      </select>
    );
  };
  return (
    <div className={styles.body}>
      {selectSize()}
      <ChordDiagram size={size} />
    </div>
  );
}
