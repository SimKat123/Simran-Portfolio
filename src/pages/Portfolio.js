import React from "react";
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Item,
  Segment,
} from "semantic-ui-react";

const ResponsiveLayout = () => {
  return (
    <div>
      <Segment>
        <Container>
        <Header
          size="huge"
          content="Projects"
          style={{ marginBottom: "0.8em" }}
          textAlign="center"
        />
        <Divider />
          <Item.Group divided>
            <Item>
              <Item.Content>
                <Item.Header>Secure Passwords</Item.Header>
                <Item.Description>
                  A website to help user generate a strong password that is able
                  to customize the password at the users discretion, in terms of
                  Uppercase Characters, Lowercase Characters, Numbers, and some
                  select Special Characters.
                </Item.Description>
              </Item.Content>
              <Item.Image>
                <Button
                  size="massive"
                  fluid
                  color="purple"
                  animated
                  href="https://simkat123.github.io/Secure_Passwords/"
                >
                  <Button.Content visible>
                    <Icon name="github" />
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Item.Image>
            </Item>

            <Item>
              <Item.Content>
                <Item.Header>Become Organized</Item.Header>
                <Item.Description>
                  A website to help user manage their daily events in a
                  organized way. This webpage only lists events that need to be
                  done within business hours (9 AM to 5 PM).
                </Item.Description>
              </Item.Content>
              <Item.Image>
                <Button
                  size="massive"
                  fluid
                  color="purple"
                  animated
                  href="https://simkat123.github.io/Become_Organized/"
                >
                  <Button.Content visible>
                    <Icon name="github" />
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Item.Image>
            </Item>

            <Item>
              <Item.Content>
                <Item.Header>Weather Around the World</Item.Header>
                <Item.Description>
                  A website to help the user prepare for the weather for any
                  city they search for.
                </Item.Description>
              </Item.Content>
              <Item.Image>
                <Button
                  size="massive"
                  fluid
                  color="purple"
                  animated
                  href="https://simkat123.github.io/Weather-around-the-world/"
                >
                  <Button.Content visible>
                    <Icon name="github" />
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Item.Image>
            </Item>

            <Item>
              <Item.Content>
                <Item.Header>Dine In or Out</Item.Header>
                <Item.Description>
                  A description which may flow for several lines and give
                  context to the content.
                </Item.Description>
              </Item.Content>
              <Item.Image>
                <Button
                  size="massive"
                  fluid
                  color="purple"
                  animated
                  href="https://vargasdm.github.io/In-or-Out/"
                >
                  <Button.Content visible>
                    <Icon name="github" />
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Item.Image>
            </Item>

            <Item>
              <Item.Content>
                <Item.Header>No More Manual ReadMe Files</Item.Header>
                <Item.Description>
                  A cool app that uses node.js to generate a ReadMe file using
                  user input through the command line
                </Item.Description>
              </Item.Content>
              <Item.Image>
                <Button
                  size="massive"
                  fluid
                  color="purple"
                  animated
                  href="https://github.com/SimKat123/No_More_Manual_ReadMe_files"
                >
                  <Button.Content visible>
                    <Icon name="github" />
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Item.Image>
            </Item>

            <Item>
              <Item.Content>
                <Item.Header>Team Manager</Item.Header>
                <Item.Description>
                  A generator to help managers organize their team member's
                  information in an easy to read format.
                </Item.Description>
              </Item.Content>
              <Item.Image>
                <Button
                  size="massive"
                  fluid
                  color="purple"
                  animated
                  href="https://github.com/SimKat123/Team_Manager"
                >
                  <Button.Content visible>
                    <Icon name="github" />
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Item.Image>
            </Item>

            <Item>
              <Item.Content>
                <Item.Header>Notebook</Item.Header>
                <Item.Description>
                  An app that helps the user write and save notes in an
                  organized manner.
                </Item.Description>
              </Item.Content>
              <Item.Image>
                <Button
                  size="massive"
                  fluid
                  color="purple"
                  animated
                  href="https://github.com/SimKat123/Notebook"
                >
                  <Button.Content visible>
                    <Icon name="github" />
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Item.Image>
            </Item>

            <Item>
              <Item.Content>
                <Item.Header>Employee Organizer</Item.Header>
                <Item.Description>
                  An Employee Organizer that uses a management database to
                  oragnize employees based on their roles, and department using
                  mysql.
                </Item.Description>
              </Item.Content>
              <Item.Image>
                <Button
                  size="massive"
                  fluid
                  color="purple"
                  animated
                  href="https://github.com/SimKat123/Employee_Organizer"
                >
                  <Button.Content visible>
                    <Icon name="github" />
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Item.Image>
            </Item>

            <Item>
              <Item.Content>
                <Item.Header
                  as="a"
                  href="https://github.com/SimKat123/ObjectsAPI"
                >
                  Objects API
                </Item.Header>
                <Item.Description>
                  A server based app that uses sql to make a database for
                  products, by organizing them into categories, products, and
                  tags.
                </Item.Description>
              </Item.Content>
              <Item.Image>
                <Button
                  size="massive"
                  fluid
                  color="purple"
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
            </Item>

            <Item>
              <Item.Content>
                <Item.Header>Tech Blog</Item.Header>
                <Item.Description>
                  A blog that uses cookies, handlebars, and log in sessions.
                </Item.Description>
              </Item.Content>
              <Item.Image>
                <Button
                  size="massive"
                  fluid
                  color="purple"
                  animated
                  href="https://github.com/SimKat123/Blog"
                >
                  <Button.Content visible>
                    <Icon name="github" />
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Item.Image>
            </Item>

            <Item>
              <Item.Content>
                <Item.Header>Chatter Hub</Item.Header>
                <Item.Description>
                  A description which may flow for several lines and give
                  context to the content.
                </Item.Description>
              </Item.Content>
              <Item.Image>
                <Button
                  size="massive"
                  fluid
                  color="purple"
                  animated
                  href="https://limitless-stream-42645.herokuapp.com/login"
                >
                  <Button.Content visible>
                    <Icon name="github" />
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Item.Image>
            </Item>

            <Item>
              <Item.Content>
                <Item.Header>JATE (Just Another Text Editor)</Item.Header>
                <Item.Description>
                  A Text Editor App that users can use offline to write and
                  organize notes.
                </Item.Description>
              </Item.Content>
              <Item.Image>
                <Button
                  size="massive"
                  fluid
                  color="purple"
                  animated
                  href="https://github.com/SimKat123/JATE"
                >
                  <Button.Content visible>
                    <Icon name="github" />
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Item.Image>
            </Item>

            <Item>
              <Item.Content>
                <Item.Header>Online Library</Item.Header>
                <Item.Description>
                  An app that allows you to search information for books and
                  organize the books I, a user and reader, have read and plan to
                  read.
                </Item.Description>
              </Item.Content>
              <Item.Image>
                <Button
                  size="massive"
                  fluid
                  color="purple"
                  animated
                  href="https://github.com/SimKat123/Online-Library"
                >
                  <Button.Content visible>
                    <Icon name="github" />
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Item.Image>
            </Item>

            <Item>
              <Item.Content>
                <Item.Header>ScoreSocial</Item.Header>
                <Item.Description>
                  The ScoreSocial application was built using the MERN stack,
                  with a React front end, MongoDB database, and
                  Node.js/Express.js server and API. When using ScoreSocial, the
                  user can preview games across five different leagues, view the
                  odds of the games, and by using a point system, place bets to
                  increase or decrease the total points.
                </Item.Description>
              </Item.Content>
              <Item.Image>
                <Button
                  size="massive"
                  fluid
                  color="purple"
                  animated
                  href="https://mighty-cliffs-23244.herokuapp.com/"
                >
                  <Button.Content visible>
                    <Icon name="github" />
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Item.Image>
            </Item>
          </Item.Group>
        </Container>
      </Segment>
    </div>
  );
};
export default ResponsiveLayout;
