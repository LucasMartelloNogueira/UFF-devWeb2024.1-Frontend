import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import SanctuariesPage from "../pages/SanctuariesPage";
import QaPage from "../pages/QaPage";
import LoginPage from "../pages/LoginPage";
import SanctuaryInfoWithPetsPage from "../pages/SanctuaryInfoWithPetsPage";
import SanctuaryPetPage from "../pages/SanctuaryPetPage";
import CartPage from "../pages/CartPage";
import PrivateRoutes from "./PrivateRoutes";
import UserInfoPage from "../pages/UserInfoPage";

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
            { path: "sanctuaryPetPage", element: <SanctuaryPetPage /> },
            { path: "cartPage", element: <CartPage /> } 
        ]
    },
    {
        path: "/",
        element: <PrivateRoutes />,
        errorElement: <ErrorPage />,
        children: [
          { path: "userInfo", element: <UserInfoPage /> }
        ],
      },
]);