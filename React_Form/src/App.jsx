import { useState } from "react";


const App = () => {

  const [title, setTitle] = useState('')


  const submitHandler =(e)=>{
    e.preventDefault()           // prevent from the default behaviour of the form
    console.log('form Submitted by', title);
    
    setTitle(''); // it will make again emplty of form input box even after submited
  }

  return (
    <div>
      <form onSubmit={(e)=>{
       submitHandler(e) 
      }}>

        <input type="text"
         placeholder="Enter your FirstName"
         
         value={title}
         onChange={(e)=>{

          setTitle(e.target.value)

         }}
         />


        <input type="text" placeholder="Enter your LastName"/>
        <button   id='button1'>Submit</button>
      </form>
    </div>
  )
}

export default App
