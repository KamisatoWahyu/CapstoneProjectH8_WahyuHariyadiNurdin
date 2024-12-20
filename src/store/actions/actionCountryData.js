import { COUNTRY_REDUCER_CASE } from "../reducers/reducer";

export function countryData(countryData) {
  return async function (dispatch) {
        const { selectedOption, mainCountry } = countryData;
      
        // Untuk mencari data sesuai dengan selected option
        const countryComparisonData = selectedOption.map((item) =>
          mainCountry.find((findItem) => findItem.cca2 === item.value)
        );

        // Untuk mengubah angka menjadi lebih sederhana (300.000.000 -> 300M)
        function formatNumber(str) {
          const num = parseInt(str, 10);
          return new Intl.NumberFormat("en", {
            notation: "compact",
            compactDisplay: "short",
          }).format(num);
        }
        
        //Untuk mengubah angka string menjadi ada komanya (aturan penulisan English)
        function formatArea(str) {
          const num = parseInt(str, 10);
          return new Intl.NumberFormat("en").format(num);
        }
        
        // Untuk mengolah data yang akan ditampilkan pada result country comparison
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

