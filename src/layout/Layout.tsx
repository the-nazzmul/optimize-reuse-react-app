import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Suspense } from "react";

const Layout = () => {
  return (
    <div className="container mx-auto bg-slate-100 h-screen">
      <Navbar />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
