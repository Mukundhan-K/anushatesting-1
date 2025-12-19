import React from 'react';
import { Outlet } from "react-router-dom";

// pages
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (<>

    <header>
        <Header />
    </header>

    <main>
        <Outlet />
    </main>

    <footer>
        <Footer />
    </footer>

  </>);
};

export default Layout;