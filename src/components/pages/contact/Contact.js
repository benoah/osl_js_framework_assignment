import React from "react";
import Heading from "../../layout/Heading";
import MyForm from "./MyForm";
import { Container } from "react-bootstrap";

export default function Contact() {
  return (
    <Container>
      <Heading title="Contact" />
      <MyForm />
    </Container>
  );
}
