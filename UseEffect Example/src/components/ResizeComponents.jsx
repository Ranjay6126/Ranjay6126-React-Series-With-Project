import { useEffect, useState } from "react"

const ResizeComponents = () => {

    const [windowWidth, setwindowWidth] = useState('window.innerWidth');

 // it will run only on first render // after the function unmount cleanup function run
    useEffect(() => {
        const handleResize = () => setwindowWidth(window.innerWidth);
        console.log("Event listener Added");
        window.addEventListener('resize', handleResize);
      
    
      return () => {
        console.log(" when unmount the Event Listener Added");
        window.addEventListener('resize', handleResize);
      }
    }, [])
    // it will run only on first render // after the funtion unmunt cleanup function run
    
  return (
    <div>
        <h1>Window width:{windowWidth}px</h1>
      
    </div>
  )
}

export default ResizeComponents
