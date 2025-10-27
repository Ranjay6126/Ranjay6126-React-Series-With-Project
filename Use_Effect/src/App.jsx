// import { useEffect, useState } from "react"

import { useEffect, useState } from "react"


// const App = () => {

//   const [num, setnum] = useState(0);

//   const [first, setfirst] = useState(100)

//   useEffect(function () {

//   console.log('use effect is running..')

//   },[num])

//   return (
//     <div>
//       <h1>The value of Num1 is{num}</h1>
//       <h2>The value of Num2 is{first}</h2>
//       <button
//        onMouseEnter={()=>{
//         setnum(num+1) 
//         }}
//         onMouseLeave={()=>{
//           setfirst(first+100)
//         }}

//         > Click me</button>
//     </div>
//   )
// }

// export default App




const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(-1)

  useEffect(function (){
  console.log("A is running");
  },[a])


  useEffect(function(){
    console.log("B is running");
  },[b])


  return (
    <div>
      <h1>{a}</h1>
    <button onClick={()=>{
      setA(a+1)
    }}>Click A</button>

      <h1>{b}</h1>
      <button onClick={()=>{
     setB(b-1)
      }}>Click B</button>
    </div>
  )
}

export default App

