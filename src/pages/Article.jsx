import Footer from "../components/Footer";
import PageHeaders from "../components/PageHeaders";
import SubArticle from "../components/SubArticle";
import earth from "../assets/planet-earth-background.jpg";
import { fetchNews } from "../store/actions/actionFetchAPI";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

let renderCount = 0;
const Article = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("dispatch fetch news");
    dispatch(fetchNews());
  }, []);

  renderCount++;
  console.log("Render count article: ,", renderCount);
  return (
    <>
      <main
        className="flex flex-col items-center justify-between bg-cover bg-center bg-fixed min-h-screen"
        style={{ backgroundImage: `url(${earth})` }}
      >
        {/* Header */}
        <PageHeaders title="Article" subtitle="What happened?" />

        {/* SubArticle */}
        <SubArticle />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Article;
