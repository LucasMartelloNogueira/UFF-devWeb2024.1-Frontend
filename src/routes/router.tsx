import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import SanctuariesPage from "../pages/SanctuariesPage";
import QaPage from "../pages/QaPage";
import LoginPage from "../pages/LoginPage";
import SanctuaryInfoWithPets from "../pages/SanctuaryInfoWithPetsPage";
import SanctuaryInfoWithPetsPage from "../pages/SanctuaryInfoWithPetsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "sanctuaries", element: <SanctuariesPage /> },
            { path: "qa", element: <QaPage /> },
            { path: "login", element: <LoginPage /> }, 
            { path: "sanctuaryInfoWithPetsPage", element: <SanctuaryInfoWithPetsPage /> }, 
        ]
    }
]);