import { useParams } from "react-router-dom"


const Courses = () => {

    const params = useParams()
    console.log(params);
    
  return (
    <div>
      <h6>Course</h6>
    </div>
  )
}

export default Courses
