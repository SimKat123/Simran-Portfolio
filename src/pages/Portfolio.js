import React from "react";
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Image,
  Item,
  Modal,
  Segment,
} from "semantic-ui-react";

const ResponsiveLayout = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Segment>
        <Header
          size="huge"
          content="Projects"
          style={{ marginBottom: "0.8em" }}
          textAlign="center"
        />
        <Divider />
        <Container>
          <Item.Group divided>
            <Item>
              <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button>Show Modal</Button>}
              >
                <Modal.Header>Password Generator</Modal.Header>
                <Modal.Content image>
                  <Image
                    size="large"
                    src="../assets/Secure Passwords.png"
                    alt="Password Generator"
                    wrapped
                  />
                </Modal.Content>
                <Modal.Actions>
                  <Button onClick={() => setOpen(false)}>Cancel</Button>
                  <Button onClick={() => setOpen(false)} positive>
                    Ok
                  </Button>
                </Modal.Actions>
              </Modal>
              <Item.Content>
                <Item.Header
                  as="a"
                  href="https://simkat123.github.io/Secure_Passwords/"
                >
                  Secure Passwords
                </Item.Header>
                <Item.Description>
                  A description which may flow for several lines and give
                  context to the content.
                </Item.Description>
              </Item.Content>
            </Item>

            <Item>
              <Item.Image src="../assets/Organizer.png" alt="Organizer" />
              <Item.Content>
                <Item.Header
                  as="a"
                  href="https://simkat123.github.io/Become_Organized/"
                >
                  Become Organized
                </Item.Header>
                <Item.Description>
                  A description which may flow for several lines and give
                  context to the content.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image
                src="../assets/Weather Around the World.png"
                alt="Weather Checker"
              />
              <Item.Content>
                <Item.Header
                  as="a"
                  href="https://simkat123.github.io/Weather-around-the-world/"
                >
                  Weather Around the World
                </Item.Header>
                <Item.Description>
                  A description which may flow for several lines and give
                  context to the content.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image
                src="../assets/In or Out.png"
                alt="Dine In or Out App"
              />
              <Item.Content>
                <Item.Header
                  as="a"
                  href="https://vargasdm.github.io/In-or-Out/"
                >
                  Dine In or Out
                </Item.Header>
                <Item.Description>
                  A description which may flow for several lines and give
                  context to the content.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image
                src="../assets/ReadMe.png"
                alt="ReadMe Generator"
              />
              <Item.Content>
                <Item.Header
                  as="a"
                  href="https://github.com/SimKat123/No_More_Manual_ReadMe_files"
                >
                  No More Manual ReadMe Files
                </Item.Header>
                <Item.Description>
                  A description which may flow for several lines and give
                  context to the content.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image src="../assets/Team.png" alt="Team Organizer" />
              <Item.Content>
                <Item.Header
                  as="a"
                  href="https://github.com/SimKat123/Team_Manager"
                >
                  Team Manager
                </Item.Header>
                <Item.Description>
                  A description which may flow for several lines and give
                  context to the content.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image src="../assets/Notebook.png" alt="Note Taker" />
              <Item.Content>
                <Item.Header
                  as="a"
                  href="https://github.com/SimKat123/Notebook"
                >
                  Notebook
                </Item.Header>
                <Item.Description>
                  A description which may flow for several lines and give
                  context to the content.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image
                src="../assets/Employee Organizer.png"
                alt="Employee Organizer"
              />
              <Item.Content>
                <Item.Header
                  as="a"
                  href="https://github.com/SimKat123/Employee_Organizer"
                >
                  Employee Organizer
                </Item.Header>
                <Item.Description>
                  A description which may flow for several lines and give
                  context to the content.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image>
                <Button
                  size="massive"
                  fluid
                  color="grey"
                  animated
                  href="https://drive.google.com/file/d/1pKn3ZLjgEoJu_nl-lB6GHvE74jnP-bCt/view?usp=share_link"
                >
                  <Button.Content visible>
                    <Icon name="video" />
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Item.Image>
              <Item.Content>
                <Item.Header
                  as="a"
                  href="https://github.com/SimKat123/ObjectsAPI"
                >
                  Objects API
                </Item.Header>
                <Item.Description>
                  A description which may flow for several lines and give
                  context to the content.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image src="../assets/Blog.png" alt="Blog" />
              <Item.Content>
                <Item.Header as="a" href="https://github.com/SimKat123/Blog">
                  Tech Blog
                </Item.Header>
                <Item.Description>
                  A description which may flow for several lines and give
                  context to the content.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image src="../assets/ChatterHub.png" alt="ChatterHub" />
              <Item.Content>
                <Item.Header
                  as="a"
                  href="https://limitless-stream-42645.herokuapp.com/login"
                >
                  Chatter Hub
                </Item.Header>
                <Item.Description>
                  A description which may flow for several lines and give
                  context to the content.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image src="../assets/JATE.png" alt="JATE" />
              <Item.Content>
                <Item.Header as="a" href="https://github.com/SimKat123/JATE">
                  JATE (Just Another Text Editor)
                </Item.Header>
                <Item.Description>
                  A description which may flow for several lines and give
                  context to the content.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image
                src="../assets/Online Library.png"
                alt="Online Library"
              />
              <Item.Content>
                <Item.Header
                  as="a"
                  href="https://github.com/SimKat123/Online-Library"
                >
                  Online Library
                </Item.Header>
                <Item.Description>
                  A description which may flow for several lines and give
                  context to the content.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image
                src="../assets/ScoreSocial.png"
                alt="ScoreSocial"
              />
              <Item.Content>
                <Item.Header
                  as="a"
                  href="https://github.com/dianavw8/ScoreSocial"
                >
                  ScoreSocial
                </Item.Header>
                <Item.Description>
                  A description which may flow for several lines and give
                  context to the content.
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Container>
      </Segment>
    </div>
  );
};
export default ResponsiveLayout;
