import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const nameRequired = (e) => {
    if (!name) {
      setError(`Please enter your name!`);
      return;
    }
  };

  const emailRequired = (e) => {
    if (!validateEmail(email)) {
      setError("Please enter your email!");
      return;
    }
  };
  const messageRequired = (e) => {
    if (!message) {
      setError(`Please enter the message you would like to send me!`);
      return;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("The email you entered is invalid");
      return;
    }

    if (!message) {
      setError(`Please enter the message you would like to send me!`);
      return;
    }
    alert(`Thank you for contacting me, ${name}`);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="../../public/logo.png" /> Contact Me
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                className="name-input"
                value={name}
                type="text"
                name="name"
                icon="user"
                iconPosition="left"
                placeholder="Name"
                onChange={handleInput}
                onBlur={nameRequired}
              />
              <Form.Input
                fluid
                className="email-input"
                value={email}
                type="email"
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={handleInput}
                onBlur={emailRequired}
              />
              <Form.Input
                fluid
                className="message-input"
                value={message}
                type="message"
                name="message"
                icon="inbox"
                iconPosition="left"
                placeholder="Message"
                onChange={handleInput}
                onBlur={messageRequired}
              />
              <Button
                color="purple"
                fluid
                size="large"
                onClick={handleFormSubmit}
              >
                Submit
              </Button>
            </Segment>
          </Form>
          {error && (
            <Message attached="bottom" warning>
              <Icon name="exclamation" /> {error}
            </Message>
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
}
