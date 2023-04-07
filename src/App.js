import React, { useState, useEffect } from "react";
import Navbarfunction from "./components/Navbarfunction";
import Navigations from "./components/Navigations";
import AboutMe from "./pages/AboutMe";

function App(props) {
  const [componentNeeded, setComponent] = useState(null);

  const showComponent = (component) => {
    setComponent(component);
  };

  // useEffect(() => {
  //   if (!componentNeeded) {
  //     setComponent(AboutMe);
  //   }
  // }, [componentNeeded]);

  return (
    <div>
      <Navbarfunction showComponent={showComponent} />
      <Navigations componentNeeded={componentNeeded}
      showComponent={showComponent} />
    </div>
  );
}

export default App;
