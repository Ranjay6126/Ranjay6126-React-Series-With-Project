/* eslint-disable no-unused-vars */


import { createContext, useState } from "react"
import ChildX from "./components/ChildX";


//1) create the Context 
const UserContext = createContext();

// 2) Wrap all the child inside a provider // <UserContext.Provider>

// 3) Pass the Value  // usestate ({name : "RAM"}) //  <UserContext.Provider value={user} >

// Export this Contex // userContex // export {UserContext}

// 4 ) Go in to the Consumer where you want to asscess the data consume there....
//const user = useContext(UserContext) // import useContext
//   {user.name}


const App = () => {

  const [user, setUser] = useState({name : "Dhanus Prajapati"});

  return (
    <div>
      <UserContext.Provider value={user}>

        <ChildX/>

      </UserContext.Provider>
        
    </div>
  )
}

export default App

export {UserContext}
