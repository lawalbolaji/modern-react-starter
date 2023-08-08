import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Counter: {count}</div>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
      </div>
    </>
  );
}

export default App;
