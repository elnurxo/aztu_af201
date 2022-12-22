import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Admin/Footer";
import Navbar from "../../components/Admin/Navbar";

function AdminRoot() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AdminRoot;
