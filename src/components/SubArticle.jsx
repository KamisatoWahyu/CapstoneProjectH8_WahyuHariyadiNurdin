import { useSelector } from "react-redux";
import questionMark from "../assets/purple-question-mark.jpg"

const SubArticle = () => {
  const newsReducer = useSelector((state) => {
    return state.newsReducer;
  });

  const handleLink = (link) => {
    window.open(link, '_blank')
  }
  return (
    <>
      {newsReducer.mainNews.length !== 0 ? (
        <section className="flex flex-col items-center">
          <div className="mt-6 mb-4 md:w-5/6 px-4 grid grid-cols-3 md:grid-cols-5 gap-2">
            {newsReducer.mainNews.map((item, index) => (
              <div
                className="p-4 h-auto col-span-1 rounded shadow-lg cursor-pointer duration-500 backdrop-blur-sm bg-black/30 hover:scale-105 hover:bg-black/50" onClick={() => handleLink(item.web_url)}
                key={index}
              >
                <img
                  src={
                    item.multimedia?.[0]?.url
                      ? `https://www.nytimes.com/${item.multimedia[0].url}`
                      : questionMark
                  }
                  alt="image"
                  className="h-28 w-full object-cover rounded"
                />
                <p className="mt-3 text-xs font-thin text-left text-white">{item.source}</p>
                <h3 className="text-sm font-medium text-left text-white line-clamp-2">
                  {item.headline.main}
                </h3>
                <p className="mt-3 mb-2 text-xs font-normal text-justify text-white line-clamp-4">
                  {item.snippet}
                </p>
              </div>
            ))}
          </div>
          <button className="px-3 py-1 text-white font-medium bg-blue-600 rounded shadow duration-300 hover:scale-105">More..</button>
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center">
          <span className="text-white">Loading data..</span>
          <span className="text-white">
            Don&apos;t worry, this might take a little time.
          </span>
        </section>
      )}
    </>
  );
};

export default SubArticle;
