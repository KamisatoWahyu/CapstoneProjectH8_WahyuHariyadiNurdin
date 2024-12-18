// import library kebutuhan
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import earth from "../assets/planet-earth-background.jpg";

// import component
import Footer from "../components/Footer";
import PageHeaders from "../components/PageHeaders";
import MainDashboard from "../components/MainDashboard";

// import reducer dan action
import { fetchCountry } from "../store/actions/actionFetchAPI";

const Dashboard = () => {
  // Persiapan reducer
  const countryReducer = useSelector(function (state) {
    return state.countryReducer;
  });
  const dispatch = useDispatch();

  // useEffect untuk mengambil 10 data terbesar melalui reducer
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
          title="WORLD"
          subtitle="We are human, not still water"
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