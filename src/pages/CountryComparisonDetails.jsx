import { useSelector } from "react-redux";

const CountryComparisonDetails = () => {
  const countryReducer = useSelector((state) => {
    return state.countryReducer;
  });

  const keys = [
    "Capital",
    "Region",
    "Sub Region",
    "Population",
    "Area",
    "Language",
    "Timezone",
    "Currency",
    "Currency Symbol",
    "Car Side",
    "Car Sign",
    "Start of Week",
  ];

  return (
    <>
      {countryReducer.countryComparisonData.length == 2 &&
      countryReducer.renderStatus ? (
        <div className="p-4 text-white w-4/6 backdrop-blur-sm bg-black/30 rounded shadow-lg">
          <table width="100%">
            <thead>
              <tr className="font-bold border-b">
                <td className="w-2/4">Attribute</td>
                {countryReducer.comparedData.map((item, key) => (
                  <td key={key} className="text-right w-1/">
                    {item.name}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {keys.map((attribute, key) => (
                <tr
                  key={key}
                  className="border-b border-slate-400 text-white/80"
                >
                  <td className="p-2">{attribute}</td>
                  {countryReducer.comparedData.map((item, index) => (
                    <td key={index} className="text-right p-1">
                      {attribute === "Capital"
                        ? item.capital
                        : attribute === "Region"
                        ? item.region
                        : attribute === "Sub Region"
                        ? item.subregion
                        : attribute === "Population"
                        ? item.population
                        : attribute === "Area"
                        ? `${item.area} km\u00B2`
                        : attribute === "Language"
                        ? item.language
                        : attribute === "Timezone"
                        ? item.timezone
                        : attribute === "Currency"
                        ? item.currencyName
                        : attribute === "Currency Symbol"
                        ? item.currencySymbol
                        : attribute === "Car Side"
                        ? item.carSide
                        : attribute === "Car Sign"
                        ? item.carSign
                        : attribute === "Start of Week"
                        ? item.startOfWeek
                        : "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <section className="flex flex-col items-center justify-center">
          <span className="text-white">First, pick 2 countries to compare.</span>
        </section>
      )}
    </>
  );
};

export default CountryComparisonDetails;
