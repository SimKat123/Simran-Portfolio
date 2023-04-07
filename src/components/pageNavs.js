import AboutMe from "../pages/AboutMe";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";

const pageNavs= (props)=> {
  if (
    props.componentNeeded === undefined ||
    props.componentNeeded === null ||
    props.componentNeeded === ""
  ) if (props.componentNeeded === "AboutMe") {
    return (
        <AboutMe />
    );
  } else if (props.componentNeeded === "Portfolio") {
    return (
        <Portfolio />
    );
  } else if (props.componentNeeded === "Resume") {
    return (
        <Resume />
    );
  } else if (props.componentNeeded === "Contact") {
    return (
        <Contact />
    );
  }
}

export default pageNavs;
