import PageHeaders from "../components/PageHeaders";
import MainComparison from "../components/MainComparison";
import Footer from "../components/Footer";
import earth from "../assets/planet-earth-background.jpg";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import Select from "react-select";

import { fetchCountry } from "../store/actions/actionFetchAPI";
import { countryData } from "../store/actions/actionCountryData";

const CountryComparison = () => {
  const [selectedOption, setSelectedOption] = useState([]);
  const countryReducer = useSelector(function (state) {
    return state.countryReducer;
  });
  const dispatch = useDispatch();
  const param = useParams();

  // Jika reducer main country kosong
  useEffect(() => {
    if (countryReducer.mainCountry.length == 0) {
      dispatch(fetchCountry());
    }
  }, [dispatch, countryReducer.mainCountry]);

  //useEffect untuk selected param
  useEffect(() => {
    if (
      Object.keys(param).length !== 0 &&
      countryReducer.optionValueCountry.length !== 0
    ) {
      const convertParamValue = Object.values(param).map((value) => {
        return { value };
      });
      const realValue = convertParamValue
        .map((item) =>
          countryReducer.optionValueCountry.find(
            (findItem) => findItem.value == item.value
          )
        )
        .filter((result) => result !== undefined);

        setSelectedOption((prevSelectedOption) => {
          if (prevSelectedOption.length === 0) {
            return realValue;
          } else if (
            realValue[0].value !== prevSelectedOption[0]?.value &&
            realValue[1].value !== prevSelectedOption[1]?.value
          ) {
            return realValue;
          }
          return prevSelectedOption;
        });
    } else if (countryReducer.optionValueCountry.length !== 0) {
      setSelectedOption([
        { value: "ID", label: "Indonesia" },
        { value: "SG", label: "Singapore" },
      ]);
    }
  }, [param, countryReducer.optionValueCountry]);

  // Untuk mencari data perbandingan sesuai dengan kode negara
  useEffect(() => {
    if (countryReducer.mainCountry.length !== 0) {
      dispatch(
        countryData(
          { selectedOption, mainCountry: countryReducer.mainCountry },
          "INSERT_COUNTRY_COMPARISON_DATA"
        )
      );
    }
  }, [dispatch, selectedOption, countryReducer.mainCountry]);

  // handle ketika memilih negara
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <main
      className="flex flex-col items-center justify-between bg-cover bg-center bg-fixed min-h-screen"
      style={{ backgroundImage: `url(${earth})` }}
    >
      {/* Header */}
      <PageHeaders
        title="Country Comparison"
        subtitle="Choose 2 countries do you want to compare"
      >
        <Select
          closeMenuOnSelect={false}
          isMulti
          options={countryReducer.optionValueCountry}
          value={selectedOption}
          onChange={handleChange}
          className="mt-4 w-5/6 md:w-1/2 text-black"
          placeholder="Choose 2 countries"
          isOptionDisabled={() => selectedOption.length == 2}
        />
      </PageHeaders>

      {/* Main comparison */}
      <MainComparison selectedComparison={selectedOption} />

      {/* Comparison Details -> Ganti jadi outlet*/}

      <Outlet />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default CountryComparison;
