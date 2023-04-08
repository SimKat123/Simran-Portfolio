import React, { useState } from "react";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";

const NavBar = (props) => {
  // const [activeNav, setNav] = useState("");
  return (
    <>
      <div>
        <Menu size="huge" fixed="top" inverted>
          <Container>
            <Menu.Item as="a" header>
              <Image
                size="tiny"
                src="../assets/logo.png"
                style={{ marginRight: "1.5em" }}
              />
              Sim's Portfolio
            </Menu.Item>
            <Menu.Item
              position="right"
              onClick={() => {
                // setNav("AboutMe");
                props.showComponent("AboutMe");
              }}
              // className={
              //   activeNav === "AboutMe" || activeNav === ""
              //     ? "highlight-nav"
              //     : ""
              // }
            >
              About Me
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                // setNav("Portfolio");
                props.showComponent("Portfolio");
              }}
              // className={activeNav === "Portfolio" ? "highlight-nav" : ""}
            >
              Portfolio
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                // setNav("Resume");
                props.showComponent("Resume");
              }}
              // className={activeNav === "Resume" ? "highlight-nav" : ""}
            >
              Resume
            </Menu.Item>
            <Dropdown text="Contacts" pointing className="link item">
              <Dropdown.Menu>
                <Dropdown.Item href="https://github.com/SimKat123">
                  GitHub
                </Dropdown.Item>
                <Dropdown.Item>Contact Me</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
      </div>
    </>
  );
};

export default NavBar;
