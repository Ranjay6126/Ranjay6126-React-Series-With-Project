import { useEffect, useState } from "react"

    const LoggerComponent = () => {

    const [rule, setRule] = useState(0)

    // it will run on every render
    
    useEffect(() => {
        console.log("component renderd and count value is:", rule);
    
    })
    

    const handleClick = () =>{
         setRule(rule + 1);

    }

  return (
    <div>
        <h1>Count Value:{rule}</h1>
        <button onClick={handleClick}>Incresed Me</button>
      
    </div>
  )
}

export default LoggerComponent
