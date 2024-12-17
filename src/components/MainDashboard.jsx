import Select from "react-select";
import { useState } from "react";
import { useSelector } from "react-redux";

const MainDashboard = () => {
  const [selectedOption, setSelectedOption] = useState([]);
  const countryReducer = useSelector((state) => {
    return state.countryReducer;
  });

  function formatNumber(str) {
    const num = parseInt(str, 10);
    return new Intl.NumberFormat("en", {
      notation: "compact",
      compactDisplay: "short",
    }).format(num);
  }

  const handleChange = (selectedOption) => {
    console.log("perubahan handle change: ", selectedOption);
    setSelectedOption(selectedOption);
  };

  return (
    <>
      {countryReducer.mainCountry.length !== 0 ? (
        <section className="flex flex-col items-center h-full">
          {countryReducer.optionValueCountry.length !== 0 && (
            <Select
              closeMenuOnSelect={false}
              options={countryReducer.optionValueCountry}
              value={selectedOption}
              onChange={handleChange}
              className="mt-4 w-1/2 text-black"
              placeholder="What is your country's rank?"
            />
          )}
          <p className="mt-4 font-bold text-white">Country population rank</p>
          <hr className="mt-4 w-3/4" />
          <div className="w-full mt-4 grid grid-cols-3 md:grid-cols-5 gap-2 p-4 ">
            {/* Country Ranking Card */}
            {countryReducer.topPopulation.map((item, i) => (
              <div
                className="w-auto h-auto rounded-md p-2 backdrop-blur-sm bg-black/10 shadow-lg text-white"
                key={i}
              >
                <div className="mb-4 flex flex-col items-center justify-center h-36 p-3">
                  <span className="p-3">No. {item.rankNumber}</span>
                  <img
                    src={item.flags.svg}
                    alt="Country Flag"
                    className="object-contain max-h-full"
                  />
                </div>
                <p className="text-center font-bold ">{item.name.common}</p>
                <div className="px-1 md:px-4 flex flex-col items-center">
                  <table className="mt-2 text-xs md:text-sm w-full">
                    <tbody>
                      <tr>
                        <td>Population</td>
                        <td>: {formatNumber(item.population) || "-"}</td>
                      </tr>
                      <tr>
                        <td>Capital</td>
                        <td>: {item.capital || "-"}</td>
                      </tr>
                      <tr>
                        <td>Continent</td>
                        <td>: {item.continents || "-"}</td>
                      </tr>
                      <tr>
                        <td>Code</td>
                        <td>: {item.cca2 || "-"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center">
          <span className="text-white">Loading data..</span>
          <span className="text-white">
            Don&apos;t worry, this might take a little time.
          </span>
        </section>
      )}
    </>
  );
};

export default MainDashboard;
