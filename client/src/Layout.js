import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Layout() {
  return (
    <main className="App">
      <Header />
      <Outlet />
    </main>
  );
}

export default Layout;
