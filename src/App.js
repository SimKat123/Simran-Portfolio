import React, { useState, useEffect } from "react";
import NavbarFunction from "./components/navbarfunction";
import PageNavs from "./components/pageNavs";
import AboutMe from "./pages/AboutMe";

function App() {
  const [componentNeeded, setComponent] = useState(null);

  const showComponent = (component) => {
    setComponent(component);
  };

  useEffect(() => {
    if (!componentNeeded) {
      setComponent(AboutMe);
    }
  }, [componentNeeded]);

  return (
    <div>
      <NavbarFunction showComponent={showComponent} />
      <PageNavs showComponent={showComponent} />
    </div>
  );
}

export default App;
