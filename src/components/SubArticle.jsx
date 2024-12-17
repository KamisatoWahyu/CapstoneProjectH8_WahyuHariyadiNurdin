import { useSelector } from "react-redux";
import megaphone from "../assets/megaphone.png";

const SubArticle = () => {
  const newsReducer = useSelector((state) => {
    return state.newsReducer;
  });

  console.log("render sub article: ", newsReducer.mainNews.length);
  return (
    <>
      {newsReducer.mainNews.length != 0 ? (
        <section className="mt-6 mb-4 md:w-5/6 px-4 grid grid-cols-3 md:grid-cols-5 gap-2">
          {newsReducer.mainNews.response.docs.map((item, index) => (
            <div
              className="p-4 h-auto col-span-1 rounded shadow-lg cursor-pointer duration-500 backdrop-blur-sm bg-black/30 hover:scale-105 hover:bg-white/50"
              key={index}
            >
              <img
                src={
                  item.multimedia?.[0]?.url
                    ? `https://www.nytimes.com/${item.multimedia[0].url}`
                    : megaphone
                }
                alt="image"
                className="h-28 w-full object-cover rounded"
              />
              <h3 className="mt-3 text-sm font-medium text-left text-white line-clamp-2">
                {item.headline.main}
              </h3>
              <p className="mt-3 mb-2 text-xs font-normal text-justify text-white line-clamp-4">
                {item.lead_paragraph}
              </p>
            </div>
          ))}
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center">
          <span className="text-white">Loading data..</span>
          <span className="text-white">Don&apos;t worry, this might take a little time.</span>
        </section>
      )}
    </>
  );
};

export default SubArticle;
