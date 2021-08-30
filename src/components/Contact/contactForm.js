import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <Form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
      <Form.Control type="hidden" name="bot-field" />
      <Form.Control type="hidden" name="form-name" value="contact" />

      <Form.Group className="mb-3 contact" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Text" placeholder="Enter name" name="name" required />

        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name="email" required />
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Get in touch..."
          name="message"
          required
        />
      </Form.Group>
      <div data-netlify-recaptcha="true" />
      <Button variant="primary" type="submit" />
    </Form>
  );
};

export default ContactForm;
