import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import earth from "../assets/planet-earth-background.jpg";

import Footer from "../components/Footer";
import PageHeaders from "../components/PageHeaders";
import MainDashboard from "../components/MainDashboard";

import { fetchCountry } from "../store/actions/actionFetchAPI";

const Dashboard = () => {
  const countryReducer = useSelector(function (state) {
    return state.countryReducer;
  });
  const dispatch = useDispatch();

  // Untuk fetch data country
  useEffect(() => {
    if (countryReducer.mainCountry.length == 0) {
      dispatch(fetchCountry());
    }
  }, [dispatch, countryReducer.mainCountry]);

  return (
    <>
      <main
        className="flex flex-col items-center justify-between start-0 bg-cover bg-center bg-fixed min-h-screen"
        style={{ backgroundImage: `url(${earth})` }}
      >
        {/* Header */}
        <PageHeaders
          title="Country Rank Population"
          subtitle="Find out which country has the most people."
        />

        {/* Main Menu */}
        <MainDashboard />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Dashboard;
