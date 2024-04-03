import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import LazyLoading from "../pages/LazyLoading";
import UseMemoExample from "../pages/UseMemoExample";
import UseCallbackExample from "../pages/UseCallbackExample";
import ReusableComponent from "../pages/ReusableComponent";
import GhostHunting from "../pages/GhostHunting";
// import { lazy } from "react";




// const Home = lazy(() => import("./../pages/Home"));
// const LazyLoading = lazy(() => import("./../pages/LazyLoading"));
// const UseMemoExample = lazy(() => import("./../pages/UseMemoExample"));
// const UseCallbackExample = lazy(() => import("./../pages/UseCallbackExample"));
// const ReusableComponent = lazy(() => import("./../pages/ReusableComponent"));
// const GhostHunting = lazy(() => import("./../pages/GhostHunting"));



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/lazyload",
        element: <LazyLoading />,
      },
      {
        path: "/use-memo",
        element: <UseMemoExample />,
      },
      {
        path: "/use-callback",
        element: <UseCallbackExample />,
      },
      {
        path: "/reusable-component",
        element: <ReusableComponent />,
      },
      {
        path: "/ghost-hunting",
        element: <GhostHunting />,
      },
    ],
  },
]);
