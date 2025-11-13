

import { useEffect, useState } from "react";

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  
    // it will run only on first render
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("setInterval start runing");
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      console.log("Time to stop");
      clearInterval(intervalId);
    };
  }, []);
  
// it will run only on first render

  return (
    <div>
      <h2>Seconds: {seconds}</h2>
    </div>
  );
};

export default TimerComponent;

    
