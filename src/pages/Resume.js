import React from "react";
import {
  Container,
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Segment,
} from "semantic-ui-react";
import resume from "../assets/Resume.pdf";

const Resume = () => {
  return (
    <div>
      <Segment>
        <Container>
          <Header
            size="huge"
            content="Resume"
            style={{ marginBottom: "0.5em" }}
            textAlign="center"
          />
          <Divider />
          <Header size="medium">
            Click to download my resume here:
            <Button
              animated
              style={{ marginLeft: "0.5em" }}
              color="purple"
              href={resume}
            >
              <Button.Content visible>
                <Icon name="file pdf" />
              </Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Header>

          <List as="ol" size={"big"}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={8}>
                  <List.Item as="li" value="*">
                    Front-End Proficiencies
                    <List.Item as="ol">
                      <List.Item as="li" value="-">
                        HTML
                      </List.Item>
                      <List.Item as="li" value="-">
                        CSS
                      </List.Item>
                      <List.Item as="li" value="-">
                        Responsive Design
                      </List.Item>
                      <List.Item as="li" value="-">
                        React
                      </List.Item>
                      <List.Item as="li" value="-">
                        Bootstrap
                      </List.Item>
                      <List.Item as="li" value="-">
                        Semantic UI
                      </List.Item>
                      <List.Item as="li" value="-">
                        Bulma UI
                      </List.Item>
                      <List.Item as="li" value="-">
                        Blaze UI
                      </List.Item>
                    </List.Item>
                  </List.Item>
                </Grid.Column>

                <Grid.Column width={8}>
                  <List.Item as="li" value="*">
                    Back-End Proficiencies
                    <List.Item as="ol">
                      <List.Item as="li" value="-">
                        JavaScript
                      </List.Item>
                      <List.Item as="li" value="-">
                        JQuery
                      </List.Item>
                      <List.Item as="li" value="-">
                        APIs
                      </List.Item>
                      <List.Item as="li" value="-">
                        Node
                      </List.Item>
                      <List.Item as="li" value="-">
                        Express
                      </List.Item>
                      <List.Item as="li" value="-">
                        MySQL or Sequelize
                      </List.Item>
                      <List.Item as="li" value="-">
                        MongoDB or Mongoose
                      </List.Item>
                      <List.Item as="li" value="-">
                        GraphQL
                      </List.Item>
                    </List.Item>
                  </List.Item>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </List>
        </Container>
      </Segment>
    </div>
  );
};

export default Resume;
