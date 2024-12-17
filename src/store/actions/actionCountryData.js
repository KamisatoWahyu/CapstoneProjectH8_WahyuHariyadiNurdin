import { COUNTRY_REDUCER_CASE } from "../reducers/reducer";

export function countryData(countryData, type) {
  return async function (dispatch) {
    switch (type) {
      case COUNTRY_REDUCER_CASE.INSERT_COUNTRY_COMPARISON_DATA: {
        const { selectedOption, mainCountry } = countryData;
        const countryComparisonData = selectedOption.map((item) =>
          mainCountry.find((findItem) => findItem.cca2 === item.value)
        );
        dispatch({
          type,
          countryComparisonData,
          renderStatus: false,
        });
        break;
      }
    }
  };
}
