import { useNavigate } from "react-router-dom";

import ajaw from "../assets/noFilter.png";
import { useSelector } from "react-redux";

const ErrorPage = () => {
  const newsReducer = useSelector((state) => {
    return state.newsReducer;
  });
  console.log("error api: ", newsReducer.length)
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen grayscale">
        <img src={ajaw} alt="" className="w-48" />
        <span>Still error, not still water dawgg</span>
        <button
          className="mt-4 px-4 py-1 bg-slate-400 rounded font-medium text-white duration-300 hover:bg-slate-900"
          onClick={() => navigate("/")}
        >
          Let&apos;s back to the aisle
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
