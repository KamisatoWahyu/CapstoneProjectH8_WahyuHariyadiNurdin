import { useSelector } from "react-redux";

const CountryComparisonDetails = () => {
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

  function formatArea(str){
    const num = parseInt(str, 10);
    return new Intl.NumberFormat("en").format(num);
  }


  const comparedData = countryReducer.countryComparisonData.map((country) => {
    const currencyName = country.currencies
      ? Object.entries(country.currencies)[0]?.[1]
      : null;
  
    return {
      name: country.name.common,
      code: country.cca2,
      capital: country.capital?.[0],
      region: country.region,
      subregion: country.subregion,
      area: country.area,
      population: country.population,
      continents: country.continents[0],
      startOfWeek: country.startOfWeek,
      currencyName: currencyName.name,
      currencySymbol: currencyName.symbol

    };
  });

  const keys = [
    "Capital",
    "Region",
    "Sub Region",
    "Population",
    "Area",
    "Currency",
    "Currency Symbol",
    "Start of Week",
  ];

  return (
    <>
      {countryReducer.countryComparisonData.length == 2 &&
    countryReducer.renderStatus ? (
        <div className="p-4 text-white w-4/6 backdrop-blur-sm bg-black/30 rounded shadow-lg">
          <table width="100%" className="">
            <thead>
              <tr className="font-bold">
                <td>Attribute</td>
                {comparedData.map((item, key) => (
                  <td key={key} className="text-right">
                    {item.name}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {keys.map((attribute, key) => (
                <tr key={key}>
                  <td>{attribute}</td>
                  {comparedData.map((item, index) => (
                    <td key={index} className="text-right">
                      {attribute === "Capital"
                        ? item.name
                        : attribute === "Region"
                        ? item.region
                        : attribute === "Sub Region"
                        ? item.subregion
                        : attribute === "Population"
                        ? formatNumber(item.population)
                        : attribute === "Area"
                        ? `${formatArea(item.area)} km\u00B2`
                        : attribute === "Currency" 
                        ? item.currencyName
                        : attribute === "Currency Symbol"
                        ? item.currencySymbol
                        : attribute === "Start of Week"
                        ? item.startOfWeek
                        : "Null"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <section className="flex flex-col items-center justify-center">
          <span className="text-white">Please choose 2 countries first</span>
        </section>
      )}
    </>
  );
};

export default CountryComparisonDetails;
