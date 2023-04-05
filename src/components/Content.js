import React, { useState } from "react";
import NavBar from "./header";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Portfolio");

  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const newPage = (page) => setCurrentPage(page);
  console.log(currentPage);
  return (
    <div className="Content">
      <NavBar currentPage={currentPage} newPage={newPage} />
      {renderPage()}
    </div>
  );
}
