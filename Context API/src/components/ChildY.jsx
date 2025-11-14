import { useContext } from "react"
import ChildZ from "./ChildZ"
import { UserContext } from "../App"




const ChildY = () => {
  
  const user = useContext(UserContext)

  return (
    <div>
      <ChildZ/>
      Data:{user.name}
    </div>
  )
}

export default ChildY
