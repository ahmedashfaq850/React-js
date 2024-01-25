import { useSignal } from "@preact/signals-react";
import { useState } from "react";

const ReactSignal = () => {
  const count = useSignal(0);

  
  const [state, setState] = useState(0);
  console.log("rendering ReactSignal");
  console.log("rendering useState");

  return (
    <div className="">
      <p>{count}</p>
      <button onClick={() => count.value++}>Increament</button>

      <p>{state}</p>
      <button onClick={() => setState((prev) => prev + 1)}>Increament</button>
    </div>
  );
};

export default ReactSignal;
