import { combineReducers } from "redux";

export const COUNTRY_REDUCER_CASE = {
  INSERT_ALL_N_TOP_OPTION_COUNTRY: "INSERT_ALL_N_TOP_OPTION_COUNTRY",
  INSERT_SELECTED_COUNTRY: "INSERT_SELECTED_COUNTRY",
  INSERT_COUNTRY_COMPARISON_DATA: "INSERT_COUNTRY_COMPARISON_DATA",
  RENDER_STATUS: "RENDER_STATUS"
};

export const NEWS_REDUCER_CASE = {
  INSERT_ALL_NEWS: "INSERT_ALL_NEWS",
};

const countryState = {
  mainCountry: [], // Untuk menyimpan seluruh data hasil fetch country
  topPopulation: [], // Untuk menyimpan data top 10 population
  selectedCountry: [], // Untuk menyimpan country yang dipilih
  countryComparisonData: [], // Untuk menyimpan data country comparison yang dipilih
  optionValueCountry: [], // Untuk menyimpan seluruh data (value, label) untuk option select
  renderStatus: false
};

const newsState = {
  mainNews: [], // Untuk menyimpan seluruh data hasil fetch news
};

const countryReducer = (state = countryState, action) => {
  switch (action.type) {
    case COUNTRY_REDUCER_CASE.RENDER_STATUS: {
      return{
        ...state,
        renderStatus: action.renderStatus
      }
    }
    case COUNTRY_REDUCER_CASE.INSERT_ALL_N_TOP_OPTION_COUNTRY: {
      return {
        ...state,
        mainCountry: action.mainCountry,
        topPopulation: action.topPopulation,
        optionValueCountry: action.optionValueCountry
      };
    }
    case COUNTRY_REDUCER_CASE.INSERT_COUNTRY_COMPARISON_DATA: {
      return {
        ...state,
        countryComparisonData: action.countryComparisonData,
        renderStatus: action.renderStatus
      }
    }
    default:
      return state;
  }
};

const newsReducer = (state = newsState, action) => {
  switch (action.type) {
    case NEWS_REDUCER_CASE.INSERT_ALL_NEWS: {
      return {
        mainNews: action.mainNews,
      };
    }
    default:
      return state;
  }
};

const mainReducer = combineReducers({
  countryReducer,
  newsReducer,
});

export { mainReducer };
