import React from "react";
import {
  Divider,
  Grid,
  Header,
  Image,
} from "semantic-ui-react";

const AboutMe = () => {
  return (
    <>
      <div>
        <Grid columns={3} style={{ marginBottom: "0.9em" }}>
          <Grid.Row>
            <Grid.Column
              style={{
                marginTop: "7.3em",
                marginLeft: "29em",
                marginRight: "-30em",
              }}
            >
              <Image
                src="../assets/images/Profile.png"
                size="small"
                verticalAlign="middle"
              />
            </Grid.Column>
            <Grid.Column style={{ marginTop: "7em", marginLeft: "2em" }}>
              <Header size="huge" content="About Me" textAlign="right" />
              <Divider />
              <Header
                as="h5">
                Hi there! My name is Simran Katuwal but I go by Sim. I am a
                graduate of the University of North Carolina at Charlotte. I
                graduated back in December, 2021 with a Bachelors of Science in
                Psychology and I have just completing my Web Development
                Certification.
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};

export default AboutMe;
