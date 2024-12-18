import { useNavigate } from "react-router-dom";

import sadBangboo from "../assets/sad-bangboo.jpg"

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen grayscale">
        <img src={sadBangboo} alt="" className="w-40 rounded from-current to-transparent" />
        <span>Oops! Something&apos;s wrong..</span>
        <button
          className="mt-4 px-4 py-1 bg-slate-600 rounded font-medium text-white duration-300 hover:bg-slate-900"
          onClick={() => navigate("/")}
        >
          Let&apos;s Back to the Start
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
