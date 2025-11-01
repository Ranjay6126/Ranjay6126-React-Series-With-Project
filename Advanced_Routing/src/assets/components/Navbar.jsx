import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="flex py-4 px-8 bg-blue-600 justify-between">
      <h2> 🤠Hat-Boy🎩 </h2>
      <div className="flex gap-20">

        <Link  className='text-lg font-bold' to='/'>Home</Link>
        <Link className='text-lg font-bold'  to='/about'>About</Link>
        <Link  className='text-lg font-bold'to='/course'>Courses</Link>
        <Link  className='text-lg font-bold'to='/product'>product</Link>
        
         
      </div>
    </div>
  )
}

export default Navbar
