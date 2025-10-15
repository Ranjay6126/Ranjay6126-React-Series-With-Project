
import Card from "./Components/Card";
import User from "./Components/User";


const App = () => {

  let arr = [10,23,56,39];

  return (
    <div className="parent">

   
      <User Name="Ranjay Babu" Age={arr[2]}/>
      
    </div>
  );
};

export default App;
