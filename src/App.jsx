import { useState } from "react";

import card from "./assets/card.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="h-full bg-black">
      <div className="flex justify-center items-center">
        <svg
          width="150"
          height="150"
          viewBox="0 0 361 153"
          fill="none"
          className="mt-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ...SVG paths and gradients... */}
        </svg>
      </div>
      <div className="flex flex-ol items-center justify-center h-screen">
        <div className="flex justify-center">
          <img src={card} alt="" className="max-w-full" />
        </div>
        <div className="flex flex-col items-center mt-4">
          {/* Buttons */}
           <div className="flex flex-col items-center mt-4 md:mt-0 md:ml-4">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-4">
            STACK BUY
          </button>
          <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full mb-4">
            GAME BUY
          </button>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
            INFINITE BUY
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
