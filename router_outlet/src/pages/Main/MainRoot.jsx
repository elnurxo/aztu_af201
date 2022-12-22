import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Main/Footer";
import Navbar from "../../components/Main/Navbar";

function MainRoot() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainRoot;
