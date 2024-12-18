import { NEWS_REDUCER_CASE, COUNTRY_REDUCER_CASE } from "../reducers/reducer";

export function fetchCountry() {
  return async function (dispatch) {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const responseJSON = await response.json();

      //Membuat top country
      const sortedCountries = responseJSON.sort(
        (a, b) => b.population - a.population
      );
      const topPopulation = sortedCountries.map((country, index) => ({
        ...country,
        rankNumber: index + 1
      }));

      // Membuat option value
      const optionValueCountry = responseJSON.map((item) => ({
        value: item.cca2,
        label: item.name.common,
      }));

      dispatch({
        type: COUNTRY_REDUCER_CASE.INSERT_ALL_N_TOP_OPTION_COUNTRY,
        mainCountry: responseJSON,
        topPopulation,
        optionValueCountry,
        isLoading: false,
      });
    } catch (error) {
      return console.log("Error fetching: ", error);
    }
  };
}

export function fetchNews() {
  return async function (dispatch) {
    try {
      const fetchNews = [];
    
      for (let i = 0; i < 1; i++) {
        const response = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=peace&page=${i}&api-key=${
            import.meta.env.VITE_REACT_NEWS_API_KEY
          }`
        );
        const responseJSON = await response.json();
        fetchNews.push(...responseJSON.response.docs); 
      }

      dispatch({
        type: NEWS_REDUCER_CASE.INSERT_ALL_NEWS,
        mainNews: fetchNews,
      });
    } catch (error) {
      console.log("Error fetching: ", error);
    }
  };
}
