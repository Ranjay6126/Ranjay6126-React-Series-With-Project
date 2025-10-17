

const App = () => {

  function btnClicked(){
    console.log("button is Clicked");
  }

  function inputChanging(val){
    console.log(val)
  }

  return (
    <div>
      <h1>Hello Ranjay !</h1> <br></br>
      <button onClick={btnClicked} className="bg-blue-200">Click Me</button>

      <br></br>
      <br></br>

      <input onChange={function(elem){
        inputChanging(elem.target.value)
      }} 
      type="text" placeholder="Enter Name" 
      className="bg-orange-200"/>
    </div>
  )
}

export default App
