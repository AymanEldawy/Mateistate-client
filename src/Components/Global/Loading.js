import Backdrop from "Components/Global/Backdrop";
import logoImg from "Assets/Images/Mati-Estate-Logo-Animaitona02.gif";
const Loading = ({ withBackdrop, logo, backdropClasses, hideText }) => {
  let classes = withBackdrop
    ? "!fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    : "";
  return (
    <>
      {withBackdrop ? <Backdrop open={true} classes={backdropClasses} /> : null}
      <div className={`relative rounded-full text-center z-[100] ${classes}`}>
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
    </>
  );
};

export default Loading;
