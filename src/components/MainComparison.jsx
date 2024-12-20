import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MainComparison = ({ selectedComparison }) => {
  const countryReducer = useSelector(function (state) {
    return state.countryReducer;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(
      `compare/${selectedComparison[0].value}/n/${selectedComparison[1].value}`
    );
    dispatch({
      type: "RENDER_STATUS",
      renderStatus: true,
    });
  };
  return (
    <>
      <section className="mt-4 p-2 grid grid-cols-2 w-full">
        {countryReducer.countryComparisonData.length !== 0 ? (
          <>
            {countryReducer.countryComparisonData.map((item, i) => (
              <div className="flex flex-col items-center" key={i}>
                <h2 className="font-bold text-lg text-white">
                  {item ? item.name.common : "Loading..."}
                </h2>
                <img
                  src={item ? item.flags.png : ""}
                  alt={item ? `Flag of ${item.name.common}` : "Loading..."}
                  className="mt-2 object-contain h-20 md:h-40 shadow-lg"
                />
              </div>
            ))}
            {countryReducer.countryComparisonData.length < 2 && (
              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center h-48 w-60 bg-gray-200 rounded">
                  <p className="text-center">
                  Select one country to compare.
                  </p>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center items-center h-48 w-60 bg-gray-200 rounded">
                <p>Select one country to compare</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center items-center h-48 w-60 bg-gray-200 rounded">
                <p className="text-center">Select one country to compare</p>
              </div>
            </div>
          </>
        )}
      </section>
      <button
        className={`mt-6 mb-4 px-3 py-1 text-white font-medium rounded shadow-xl backdrop-blur-sm bg-blue-600 hover:bg-blue-800 transition-colors duration-300 cursor-pointer z-0 ${
          countryReducer.countryComparisonData.length !== 2
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        disabled={countryReducer.countryComparisonData.length !== 2}
        onClick={handleNavigate}
      >
        {countryReducer.countryComparisonData.length !== 2
          ? "Select 2 countries first."
          : "Compare"}
      </button>
    </>
  );
};

export default MainComparison;
