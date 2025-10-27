import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = "No user available";

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => (
      <div
        key={idx}
        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 w-60"
      >
        <a href={elem.url} target="_blank" rel="noopener noreferrer">
          <div className="h-40 w-full overflow-hidden rounded-lg">
            <img
              className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
              src={elem.download_url}
              alt={elem.author}
            />
          </div>
          <h2 className="mt-2 text-center text-gray-800 font-semibold text-lg">
            {elem.author}
          </h2>
        </a>
      </div>
    ));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        📸 Picsum Photo Gallery
      </h1>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {printUserData}
      </div>

      <div className="flex gap-4 mt-10">
        <button
          onClick={() => setIndex(index > 1 ? index - 1 : 1)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300"
        >
          Prev
        </button>

        <button
          onClick={() => setIndex(index + 1)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300"
        >
          Next
        </button>
      </div>

      <p className="mt-4 text-gray-700 font-medium">
        Current Page: <span className="text-green-700">{index}</span>
      </p>
    </div>
  );
};

export default App;
