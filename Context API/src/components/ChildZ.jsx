
import { useContext } from "react"
import { UserContext } from "../App"


const ChildZ = () => {

  const user = useContext(UserContext);

  return (
    <div>
      {user.name}
    </div>
  )
}

export default ChildZ
