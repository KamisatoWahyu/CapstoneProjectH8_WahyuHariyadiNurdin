import Footer from "../components/Footer";
import PageHeaders from "../components/PageHeaders";
import SubArticle from "../components/SubArticle";
import earth from "../assets/planet-earth-background.jpg";
import { fetchNews } from "../store/actions/actionFetchAPI";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Article = () => {
  const newsReducer = useSelector((state) => {
    return state.newsReducer;
  });
  const dispatch = useDispatch();
  
  // Untuk fetch data news
  useEffect(() => {
    if(newsReducer.mainNews.length == 0){
      dispatch(fetchNews());
    }
  }, [dispatch, newsReducer]);
  return (
    <>
      <main
        className="flex flex-col items-center justify-between bg-cover bg-center bg-fixed min-h-screen"
        style={{ backgroundImage: `url(${earth})` }}
      >
        {/* Header */}
        <PageHeaders title="Article" subtitle="Explore ideas and facts that shape our world."/>

        {/* SubArticle */}
        <SubArticle />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Article;
