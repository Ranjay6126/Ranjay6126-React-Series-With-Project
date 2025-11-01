import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]); // better name for clarity

  const getdata = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    console.log(response.data); 
    setData(response.data); // save the fetched data in state
  };

  return (
    <div>
      <button onClick={getdata}>Get Data</button>

      <div>
        {data.map((elem, index) => (
          <h3 key={index}>
            Hello, {elem.author} ({index + 1})
          </h3>
        ))}
      </div>
    </div>
  );
};

export default App;
