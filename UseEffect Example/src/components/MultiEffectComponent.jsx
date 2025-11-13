import { cacheSignal } from "react";
import { useEffect, useState } from "react";

const MultiEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [second, setSecond] = useState(0);

  // Runs when 'count' changes // update
  useEffect(() => {
    console.log(`I will run on first render and when count changes: ${count}`);
  }, [count]);
//   side-effect logic will run only when count is changed


  // Runs only once (on first render)
  useEffect(() => {
    const intervalId = setInterval(() => {
        console.log("set time interval started...")
      setSecond(prev => prev + 1); // increment every second
    }, 1000);

    // cleanup function
    return () => {
        console.log("time to stope")
      clearInterval(intervalId);
    };
  }, []); // it will run only on first render

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Seconds: {second}</h2>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default MultiEffectComponent;
