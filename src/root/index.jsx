import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const Header = lazy(() => import("../components/Header"));
const Products = lazy(() => import("../pages/Products"));
const AddData = lazy(() => import("../pages/AddData"));
const Details = lazy(() => import("../pages/Details"));
const Admin = lazy(() => import("../pages/adminpanel"));
const AddType = lazy(() => import("../pages/addType"));
import { Suspense } from "react";
import Loading from "../components/Loading/loading";

function Root() {
  return (
    <>
      <Header />
      <Suspense fallback={<div> <h1>Hello Root</h1> {<Loading />}</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:name" element={<Products />} />
          <Route path="/addData" element={<AddData />} />
          <Route path="/details/:name" element={<Details />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addtype" element={<AddType />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default Root;
