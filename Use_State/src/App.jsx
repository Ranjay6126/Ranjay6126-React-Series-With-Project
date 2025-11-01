
/*

const App = () => {


  let a = 20;

  function ChangeA(){
    console.log(a);
       a++;
       console.log(a);
  }

  return (
    <div>
    <h1>Intial Value is{a}</h1>
    <button onClick={ChangeA}>Click Me</button>
    </div>
  )
}
  
export default App  */

// ways to pass the Number , string and Array in the usestate hooks

import { useState } from "react"

const App = () => {

  const [first, setfirst] = useState(0);
  const [Name, SetName] = useState("Ranjay")
  const [user,setuser] = useState([10,20,30])

  const changeValue =()=>{
    setfirst(prev => prev + 1);
    SetName("Gautam");
    setuser([20,40,60]);
  }

  return (
    <div>
      <h1> Value of a {first}</h1>
      <h2>First name is {Name}</h2>
      <h3>Initail all the array value is {user}</h3>
      <button onClick={changeValue}>Click</button>
    </div>
  )
}

export default App 
