import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "" && details.trim() === "") return;

    setTask([...task, { title, details }]);
    setTitle("");
    setDetails("");
  };

  // 🔴 Function to delete all tasks
  const deleteAllHandler = () => {
    if (window.confirm("Are you sure you want to delete all notes?")) {
      setTask([]);
    }
  };

  return (
    <div className="min-h-screen text-black bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-300 flex justify-center items-center font-sans">
      <div className="bg-black/20 text-black backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10 w-[90%] md:w-[80%] max-w-5xl flex flex-col md:flex-row items-start border border-black/40 hover:shadow-yellow-500/40 transition-all duration-500 ease-in-out">
        
        {/* Left Side: Form */}
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-5 w-full md:w-1/2"
        >
          <h1 className="text-3xl font-extrabold text-center mb-2 drop-shadow-sm">
            ✨ Add a New Note 📝
          </h1>

          <input
            type="text"
            placeholder="Enter Note Heading"
            className="p-3 w-full h-12 font-medium border border-gray-900 rounded-xl text-gray-800 focus:ring-2 focus:ring-orange-400 shadow-sm hover:shadow-md transition-all duration-200"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Write your note details..."
            className="p-3 w-full h-32 font-medium border border-gray-900 rounded-xl text-gray-800 focus:ring-2 focus:ring-orange-400 shadow-sm hover:shadow-md transition-all duration-200"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 ease-in-out h-12 w-full text-white font-bold rounded-xl shadow-lg hover:scale-105 active:scale-95"
          >
            ➕ Add Note
          </button>
        </form>

        {/* Right Side: Recent Notes */}
        <div className="lg:w-1/2 p-6 mt-10 md:mt-0">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">Recent Notes</h1>
            {task.length > 0 && (
              <button
                onClick={deleteAllHandler}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200 hover:scale-105"
              >
                🗑️ Delete All
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-4 overflow-auto max-h-[400px]">
            {task.length === 0 ? (
              <p className="text-gray-800">No Notes yet !!!</p>
            ) : (
              task.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/50 backdrop-blur-md p-4 rounded-xl shadow-md w-full md:w-[48%]"
                >
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <p className="text-gray-800 mt-2">{item.details}</p>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

      {/* Floating Animation */}
      <style>
        {`
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
};

export default App;
