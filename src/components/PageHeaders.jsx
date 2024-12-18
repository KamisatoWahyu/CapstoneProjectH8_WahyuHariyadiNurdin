import { NavLink } from "react-router-dom";

const PageHeaders = ({ title, subtitle, children}) => {

  const isNavlinkActive = (isActive) => {
    return isActive ? "font-bold underline-offset-8" : "text-gray-500";
  };

  return (
    <>
      <section className="flex flex-col items-center w-full bg-gradient-to-b from-black to-transparent backdrop-blur-sm shadow text-white z-30">
        <div className="flex gap-6 mt-4">
          <NavLink
            to="/"
            className={({ isActive }) => isNavlinkActive(isActive)}
          >
            Home Page
          </NavLink>
          <NavLink
            to="/country-comparison"
            className={({ isActive }) => isNavlinkActive(isActive)}
          >
            Country Comparison
          </NavLink>
          <NavLink
            to="/article"
            className={({ isActive }) => isNavlinkActive(isActive)}
          >
            Article
          </NavLink>
        </div>

        <h1 className="mt-12 font-bold text-xl md:text-6xl">{title}</h1>
        <p className="mt-4 mb-4 w-1/2 text-center text-xs md:text-xl font-thin">{subtitle}</p>
        {children}
      </section>
    </>
  );
};

export default PageHeaders;
