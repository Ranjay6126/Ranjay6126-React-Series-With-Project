import Card from './components/Card.jsx'

import Navbar from './components/Navbar.jsx';

const App = () => {

  let value  = "Dhanush";
  const age = 34;
  return (
    <div>
      <div className="card">
       <h1>Gautam + {value}+ His Age:{age}</h1>
       
      </div>
       <Card/>
        <Card/>
        <Navbar/>
    </div>
   
  )
}
export default App
