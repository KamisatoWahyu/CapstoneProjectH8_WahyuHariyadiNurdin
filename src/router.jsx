import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CountryComparison from "./pages/CountryComparison";
import ErrorPage from "./pages/ErrorPage";
import Article from "./pages/Article";
import CountryComparisonDetails from "./pages/CountryComparisonDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        errorElement: <ErrorPage />
    },
    {
        path: '/country-comparison',
        element: <CountryComparison />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'compare/:country1/n/:country2',
                element: <CountryComparisonDetails />
            }
        ]
    },
    {
        path: '/article',
        element: <Article />,
        errorElement: <ErrorPage />
    }
])

export default router;