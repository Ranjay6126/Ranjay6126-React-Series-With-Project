import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="nav">
        <h2>Ranjay Developer</h2>

        <div>
            {/* // single page application */}
            
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/contact'>Contact</Link>
        </div>
     </div>
  )
}

export default Navbar
