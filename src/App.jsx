import { useState } from "react";

import card from "./assets/card.png";
import "./App.css";
import "./assets/logo.svg";
import Modal from "react-modal";
// AiOutlineClose
import { AiOutlineClose } from "react-icons/ai";
// BsCreditCard
import { BsCreditCard } from "react-icons/bs";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "400px",
    width: "70%",
    border: "none",
    borderRadius: "8px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)",
    // padding: "24px"ff,
    background: "#EEF1FF",
  },
};
function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [select, setSelect] = useState("");

  const handleOptionSelect = (event) => {
    const selectedValue = event.target.value;
    setSelect(selectedValue);
    console.log(selectedValue);
  };
  return (
    <div className="h-full bg-black">
      <div className="flex  justify-center items-center">
        <svg
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="150"
          height="150"
          viewBox="0 0 361 153"
          fill="none"
          className="mt-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.6969 90H0.554639L13.8264 27.6495H39.5683C45.8033 27.6495 50.9101 29.4309 54.8887 32.9938C58.9266 36.4973 60.9456 40.8025 60.9456 45.9093C60.9456 53.2726 58.3328 59.2701 53.1072 63.9019C47.941 68.5336 41.2606 70.8495 33.066 70.8495H19.7942L15.6969 90ZM26.1184 41.0103L22.6445 57.4887H34.8474C37.6977 57.4887 40.1324 56.4792 42.1513 54.4602C44.2297 52.4412 45.2689 50.0363 45.2689 47.2454C45.2689 45.3452 44.6454 43.8309 43.3984 42.7027C42.1513 41.5744 40.459 41.0103 38.3212 41.0103H26.1184ZM75.7893 90H61.5378L75.5221 24.0866H89.7736L75.7893 90ZM92.8703 68.4445L98.0365 43.6825H112.288L106.676 70.226C106.201 72.5419 106.528 74.4124 107.656 75.8375C108.844 77.2033 110.655 77.8862 113.09 77.8862C115.406 77.8862 117.454 77.1736 119.236 75.7485C121.076 74.3233 122.234 72.4825 122.709 70.226L128.321 43.6825H142.573L136.605 72.0074C135.358 78.0643 132.448 82.7258 127.876 85.9918C123.363 89.2577 117.81 90.8907 111.219 90.8907C104.628 90.8907 99.5804 88.7827 96.0769 84.5666C92.5734 80.3505 91.5045 74.9765 92.8703 68.4445ZM157.79 56.1526H148.883L151.555 43.6825H160.462L163.134 31.2124L178.277 26.7588L174.714 43.6825H185.848L183.176 56.1526H172.042L168.657 72.1856C167.944 75.7485 169.34 77.5299 172.843 77.5299H178.633L175.961 90H171.151C164.738 90 160.076 88.2482 157.166 84.7447C154.257 81.2412 153.455 76.461 154.762 70.4041L157.79 56.1526ZM188.188 70.6713C188.188 63.0705 190.979 56.5386 196.561 51.0755C202.202 45.553 208.942 42.7917 216.78 42.7917C223.253 42.7917 228.508 44.6326 232.546 48.3142C236.584 51.9365 238.603 56.8355 238.603 63.0111C238.603 70.612 235.812 77.1736 230.23 82.6961C224.648 88.1592 217.968 90.8907 210.189 90.8907C203.657 90.8907 198.342 89.0796 194.245 85.4573C190.207 81.7757 188.188 76.847 188.188 70.6713ZM202.974 69.5134C202.974 72.0074 203.686 74.0264 205.112 75.5703C206.596 77.1142 208.556 77.8862 210.99 77.8862C214.494 77.8862 217.493 76.5204 219.987 73.7889C222.54 70.9979 223.817 67.7913 223.817 64.1691C223.817 61.675 223.075 59.6561 221.59 58.1122C220.165 56.5682 218.235 55.7963 215.8 55.7963C212.297 55.7963 209.268 57.1918 206.715 59.9827C204.221 62.7142 202.974 65.8911 202.974 69.5134ZM337.449 42.7917C345.346 42.7917 351.195 45.7014 354.996 51.5208C358.856 57.2808 359.449 64.1097 356.777 72.0074H323.019C323.435 74.2045 324.414 75.8969 325.958 77.0845C327.502 78.2128 329.402 78.7769 331.659 78.7769C336.172 78.7769 339.883 77.0548 342.793 73.6107L353.927 78.9551C351.552 82.3992 348.286 85.2495 344.129 87.506C340.032 89.7625 335.608 90.8907 330.857 90.8907C324.325 90.8907 319.011 89.0796 314.913 85.4573C310.875 81.7757 308.856 76.847 308.856 70.6713C308.856 63.0705 311.647 56.5386 317.229 51.0755C322.87 45.553 329.61 42.7917 337.449 42.7917ZM341.368 56.7761C339.883 55.5291 338.102 54.9056 336.023 54.9056C333.945 54.9056 331.896 55.4697 329.877 56.5979C327.918 57.7262 326.315 59.2998 325.067 61.3188H344.129C343.773 59.4779 342.852 57.9637 341.368 56.7761Z"
            fill="#2D52FA"
          ></path>
          <g clip-path="url(#clip0_27_79)" fill="none">
            <path
              d="M258.365 105.528L250.56 94.2088C249.166 92.1861 248.506 89.7001 248.814 87.2389C248.875 86.7473 248.961 86.3619 249.077 86.1886L259.642 76.1775L270.567 75.5516C271.81 75.4809 273.001 75.0707 274.032 74.3457C275.213 73.5147 276.01 72.3407 276.87 71.1773C278.01 69.6355 279.116 68.0689 280.187 66.4776C280.937 65.3602 281.834 64.271 282.327 62.9944C282.433 62.7151 282.515 62.3827 282.365 62.1245C282.238 61.9088 281.981 61.8133 281.741 61.7709C280.916 61.6224 279.999 61.7638 279.167 61.7921C278.26 61.8204 277.349 61.8452 276.438 61.8098C275.083 61.7603 273.727 61.6789 272.371 61.6259C269.287 61.5092 266.921 61.4951 263.836 61.3996C260.919 61.3041 257.78 61.0424 254.863 60.9469C248.776 60.7418 243.278 50.7272 242.237 44.5459C250.971 44.5459 259.704 44.5459 268.441 44.5459C273.922 44.5459 279.4 44.5459 284.881 44.5459C287.801 44.5459 290.211 44.3585 292.967 45.5502C295.511 46.6499 297.808 48.3968 299.421 50.7237C302.546 55.2359 301.961 59.8401 300.027 64.614C298.815 67.6057 297.466 70.5408 296.004 73.4086C294.076 77.1853 292.022 81.5809 289.068 84.5973C282.375 91.4328 274.049 91.3515 265.329 91.7935C267.681 95.2237 271.478 99.0004 271.238 103.467C271.05 107.024 269.28 109.726 267.482 112.551C265.336 115.928 263.193 119.302 261.046 122.679L245.445 147.231L242.312 152.164"
              fill="#2D52FA"
            ></path>
            <path
              opacity="0.54"
              d="M259.555 76.1817C259.555 76.1817 257.785 84.9515 265.238 91.7942L273.119 91.3203C273.119 91.3203 284.917 90.9279 290.371 82.996L282.975 77.9382L275.639 72.9248C275.639 72.9248 273.783 75.1547 271.391 75.4956C268.316 75.6831 259.555 76.1817 259.555 76.1817Z"
              fill='url("#paint0_linear_27_79")'
            ></path>
            <path
              opacity="0.62"
              d="M281.242 61.7046C281.242 61.7046 296.586 60.5093 298.798 67.5288C298.798 67.5288 293.323 79.6191 290.461 82.9963C286.773 80.7215 275.73 72.9251 275.73 72.9251C275.73 72.9251 281.324 65.308 282.467 62.6346C282.666 62.1749 281.803 61.6869 281.242 61.7046Z"
              fill='url("#paint1_linear_27_79")'
            ></path>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_27_79"
              x1="267.503"
              y1="93.092"
              x2="278.532"
              y2="74.5956"
              gradientUnits="userSpaceOnUse"
            >
              <stop></stop>
              <stop offset="0.24" stop-color="#121619"></stop>
              <stop offset="0.5" stop-color="#23282F"></stop>
              <stop offset="0.76" stop-color="#2C343C"></stop>
              <stop offset="1" stop-color="#303841"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_27_79"
              x1="291.964"
              y1="61.7399"
              x2="281.352"
              y2="79.5336"
              gradientUnits="userSpaceOnUse"
            >
              <stop></stop>
              <stop offset="0.04" stop-color="#020304"></stop>
              <stop offset="0.44" stop-color="#1B2025"></stop>
              <stop offset="0.78" stop-color="#2A3139"></stop>
              <stop offset="1" stop-color="#303841"></stop>
            </linearGradient>
            <clipPath id="clip0_27_79">
              <rect
                width="59.3814"
                height="107.629"
                fill="white"
                transform="translate(242.237 44.5361)"
              ></rect>
            </clipPath>
            <linearGradient
              id="paint0_linear_27_79"
              x1="267.503"
              y1="93.092"
              x2="278.532"
              y2="74.5956"
              gradientUnits="userSpaceOnUse"
            >
              <stop></stop>
              <stop offset="0.24" stop-color="#121619"></stop>
              <stop offset="0.5" stop-color="#23282F"></stop>
              <stop offset="0.76" stop-color="#2C343C"></stop>
              <stop offset="1" stop-color="#303841"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_27_79"
              x1="291.964"
              y1="61.7399"
              x2="281.352"
              y2="79.5336"
              gradientUnits="userSpaceOnUse"
            >
              <stop></stop>
              <stop offset="0.04" stop-color="#020304"></stop>
              <stop offset="0.44" stop-color="#1B2025"></stop>
              <stop offset="0.78" stop-color="#2A3139"></stop>
              <stop offset="1" stop-color="#303841"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col items-center h-screen">
        <img src={card} width={600} alt="" className="w-ful" />
        <button
          onClick={openModal}
          className="mt-8 text-center text-2xl md:text-3xl p-4 px-8 rounded-full text-white bg-gradient-to-r from-purple-900 viapurple-700 to-blue-800"
        >
          BUY NOW
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex justify-end items-end">
          {/* AiOutlineClose */}
          <AiOutlineClose
            onClick={closeModal}
            className="text-2xl  text-black"
          />
        </div>
        <div
          className="text-start flex items-center "
          style={{
            fontFamily: "Poppins",
          }}
        >
          <h1>
            <span className="text-black text-2xl font-semibold">
              Choose your Card
            </span>
            <p
              style={{
                fontFamily: "Poppins",
              }}
              className="text-sm"
            >
              Select cards you want to buy
            </p>
          </h1>
        </div>

        <form action="">
          <select
            name="select"
            id="select"
            className="p-2 mt-2 bg-[#EEF1FF]  rounded-md  border border-black  outline-none w-full"
            value={select}
            onChange={handleOptionSelect}
          >
            <option value="" className="text-black">
              Select card
            </option>
            <option value="stack" className="text-black">
              Stack
            </option>
            <option value="game" className="text-black">
              Game
            </option>
            <option value="infinite" className="text-black">
              Infinite
            </option>
          </select>
        </form>
        <div className="w-full bg-[#B1B2FF] mt-10 rounded-sm text-black text-center p-2">
          <a
            href=""
            className=" w-[100px] text-center p-2 h-20 text-black text-lg font-medium"
          >
            FORM Link
          </a>
        </div>
        <div className="w-full bg-[#AAC4FF] mt-1 rounded-sm text-black text-center p-2">
          <a
            href=""
            className=" w-[100px] text-center p-2 h-20 text-black text-lg font-medium"
          >
            FIAT PAYMENT Link
          </a>
        </div>
      </Modal>
    </div>
  );
}

export default App;
