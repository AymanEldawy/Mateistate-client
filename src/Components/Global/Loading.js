import logoImg from "Assets/Images/Mati-Estate-Logo-Animaitona02.gif";
import { createPortal } from "react-dom";
const Loading = ({ logo }) => {
  return createPortal(
    <div
      className=" fixed top-0 left-0 bottom-0 right-0 z-50 flex items-center justify-center backdrop-blur-sm bg-[#0008] pointer-events-auto opacity-1"
    >
      <div className={`relative rounded-full text-center z-[100]`}>
        {logo ? (
          <img src={logoImg} alt="mateistate" className="w-96 object-contain" />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <linearGradient id="a11">
              <stop offset="0" stopColor="#16FF83" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#16FF83"></stop>
            </linearGradient>
            <circle
              fill="none"
              stroke="url(#a11)"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray="0 44 0 44 0 44 0 44 0 360"
              cx="100"
              cy="100"
              r="70"
              transform-origin="center"
            >
              <animateTransform
                type="rotate"
                attributeName="transform"
                calcMode="discrete"
                dur="1"
                values="360;324;288;252;216;180;144;108;72;36"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
          </svg>
        )}
        {logo ? null : (
          <h3 className="text-[#36E1A7] text-2xl -m-2 capitalize animate-pulse">
            loading <span className="text-5xl h-0"></span>
          </h3>
        )}
      </div>
    </div>,
    document.getElementById("portal-modal-loading")


  );
};

export default Loading;
