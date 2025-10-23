/*import { useState } from "react"

const App = () => {

  const [first, setfirst] = useState(0)
 

  const Isvalue = () => {
    setfirst(prev => prev+1); // setfirst(first+1)
  
  }
  const decrease =()=>{
    setfirst(dec => dec-1)
  }

  const jumpfun =()=>{
    setfirst(first + 5);
  }

  return (
    <div>
     <h1 id="box">{first}</h1>
     <button onClick={Isvalue} class='up'>UP</button> <button onClick={decrease}class='down'>DOWN</button><br></br>
     <button onClick={jumpfun}>Jump</button>
    </div>
  )
}

export default App */



import { useState } from "react"



const App = () => {

  const [num, setNum] = useState({user:'Ranjay', age:25})
  
  const [first, setfirst] = useState([10,20,30]);

  const btnClicked =()=>{

   console.log(num);

    const newNum = {...num};
    newNum.user = "dhanush"
    newNum.age = 40;
    setNum(newNum);
  }

  const kicedme =()=>{
     const newfirst = [...first]
     newfirst.push(99);
     setfirst(newfirst);
     console.log(newfirst);
  }


  return (
    <div>
      <h2>{first} and {first[0]}</h2>
      <button onClick={kicedme}>click</button>
      <br></br>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click Me</button>
    </div>
  )
}

export default App

