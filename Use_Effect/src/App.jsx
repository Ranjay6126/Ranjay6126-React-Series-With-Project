import { useEffect, useState } from "react"


const App = () => {

  const [num, setnum] = useState(0);

  const [first, setfirst] = useState(100)

  useEffect(function () {

  console.log('use effect is running..')

  },[num])

  return (
    <div>
      <h1>The value of Num1 is{num}</h1>
      <h2>The value of Num2 is{first}</h2>
      <button
       onMouseEnter={()=>{
        setnum(num+1) 
        }}
        onMouseLeave={()=>{
          setfirst(first+100)
        }}

        > Click me</button>
    </div>
  )
}

export default App
