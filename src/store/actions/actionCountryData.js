import { COUNTRY_REDUCER_CASE } from "../reducers/reducer";

export function countryData(countryData) {
  return async function (dispatch) {
        const { selectedOption, mainCountry } = countryData;
        const countryComparisonData = selectedOption.map((item) =>
          mainCountry.find((findItem) => findItem.cca2 === item.value)
        );

        function formatNumber(str) {
          const num = parseInt(str, 10);
          return new Intl.NumberFormat("en", {
            notation: "compact",
            compactDisplay: "short",
          }).format(num);
        }
      
        function formatArea(str) {
          const num = parseInt(str, 10);
          return new Intl.NumberFormat("en").format(num);
        }
      
        const comparedData = countryComparisonData.map((country) => {
          const currencyName = country.currencies
            ? Object.entries(country.currencies)[0]?.[1]
            : null;
      
          const languages = country.languages
            ? Object.values(country.languages)
            : null;
      
          return {
            name: country.name.common,
            code: country.cca2,
            capital: country.capital?.[0],
            region: country.region,
            subregion: country.subregion,
            area: formatArea(country.area),
            population: formatNumber(country.population),
            continents: country.continents[0],
            startOfWeek: country.startOfWeek,
            currencyName: currencyName.name,
            currencySymbol: currencyName.symbol,
            language: languages.join(", "),
            timezone: country.timezones.join(", "),
            carSide: country.car.side,
            carSign: country.car.signs[0],
          };
        });
        dispatch({
          type: COUNTRY_REDUCER_CASE.INSERT_COUNTRY_COMPARISON_DATA,
          countryComparisonData,
          comparedData,
          renderStatus: false,
        });
    }
  };

