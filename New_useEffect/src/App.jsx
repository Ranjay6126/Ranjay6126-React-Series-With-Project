
import { useEffect, useState } from "react"

const App = () => {

    const [count, SetCount] = useState(0)
    const [update, SetUpdate] = useState(0)

    function handleClick() {

        SetCount(count+1);
        SetUpdate(update-1)

    }
    
    // 1st Varition// we run on every render

    /*useEffect(() => {

        alert("I will run on every render");  
    })*/
// _____________________________________________________________


        // 2nd Varition // we run only once; at first render;

       /* useEffect(() => {
        
            alert(" I will run only once that is first time")
        
        }, []) */


        // _____________________________________________________________


        // 3rd Varition // we run when dependency changes;

     /*   useEffect(() => {
         
            alert(" I will run when dependency changes")

        }, [count])  */



        //______________________________________________________________//




        // 4th Varition //  Munltiple Dependencies

     /*   useEffect(() => {
            alert(" I will run based on the multiple dependencies");
        },[count, update]); */




        //______________________________________________________________//

        // 5th Varition // Cleanup Function //

       useEffect(() => {
         
        alert("Count is updated");
    
         return () => {
            alert("Cleanup Function is called before next useEffect");
          
         }
       }, [count])
       
        
    
  return (
    <>
    <div>
        <h1>{count}</h1>
       <button onClick={handleClick}> Click ME </button>
    </div>

     <div>
        <h1>{update}</h1>
       <button onClick={handleClick}> Click ME </button>
    </div>
    </>
  )
}

export default App
