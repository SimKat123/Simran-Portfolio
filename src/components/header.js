import React from "react";
import {
  Container,
  Dropdown,
  Image,
  Menu,
} from "semantic-ui-react";

const NavBar = ({currentPage, newPage}) => {
  return (
    <>
      <div>
        <Menu size="huge" fixed="top" inverted>
          <Container>
            <Menu.Item as="a" header>
              <Image
                size="tiny"
                src="/logo.png"
                style={{ marginRight: "1.5em" }}
                href="/"
              />
              Sim's Portfolio
            </Menu.Item>
            <Menu.Item
              to="#aboutMe"
              position="right"
              href="/AboutMe"
              onClick={() => newPage("AboutMe")}
              className={currentPage === "AboutMe"}
            >
              About Me
            </Menu.Item>
            <Menu.Item
              to="#Portfolio"
              href="/Portfolio"
              onClick={() => newPage("Portfolio")}
              className={currentPage === "Portfolio"}
            >
              Portfolio
            </Menu.Item>
            <Menu.Item
              to="#resume"
              href="/Resume"
              onClick={() => newPage("Resume")}
              className={currentPage === "Resume"}
            >
              Resume
            </Menu.Item>
            <Dropdown text="Contacts" pointing className="link item">
              <Dropdown.Menu>
                <Dropdown.Item href="https://github.com/SimKat123">
                  GitHub
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
      </div>
    </>
  );
};

export default NavBar;
