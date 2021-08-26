import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const ContactForm = () => {
  // State for form data
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
    sent: false,
    buttonText: 'Submit',
    err: '',
  });
  // State for errors
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // Destructure the name and value from the input element
    const { name, value } = e.target;
    // set state to be the value of the data
    setData({
      ...data,
      [name]: value,
    });
    // reset error state once corrected
    if (!!errors[name])
      setErrors({
        ...errors,
        [name]: null,
      });
  };

  const resetForm = () => {
    setData({
      name: '',
      email: '',
      message: '',
      sent: false,
      buttonText: 'Submit',
      err: '',
    });
  };

  const findFormErrors = () => {
    // destructure state properties
    const { email, name, message } = data;
    const newErrors = {};

    // name errors
    if (!name || name === '') newErrors.name = 'Cannot be blank';
    else if (name.length < 5) newErrors.name = 'Name is too short';
    else if (name.length > 30) newErrors.name = 'Name is too long';

    // email errors
    if (!email || email === '') newErrors.email = 'Email cannot be blank';

    // message errors
    if (!message || message === '') newErrors.message = 'Message cannot be blank';

    return newErrors;
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(e);
      setData({
        ...data,
        buttonText: 'Sending...',
      });

      // axios sending data
      axios
        .post('/api/sendmail', data)
        .then((res) => {
          if (res.data.result !== 'success') {
            setData({
              ...data,
              buttonText: 'Failed to send',
              sent: false,
              err: 'fail',
            });
            setTimeout(() => {
              resetForm();
            }, 6000);
          } else {
            setData({
              ...data,
              sent: true,
              buttonText: 'Sent',
              err: 'success',
            });
            setTimeout(() => {
              resetForm();
            }, 6000);
          }
        })
        .catch((err) => {
          console.log(err.response.status);
          setData({
            ...data,
            buttonText: 'Failed to send',
            err: 'fail',
          });
        });
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="Text"
          placeholder="Enter name"
          name="name"
          required
          onChange={handleChange}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="email"
          onChange={handleChange}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Get in touch..."
          name="message"
          onChange={handleChange}
          isInvalid={!!errors.message}
        />
        <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={formSubmit}>
        {data.buttonText}
      </Button>
    </Form>
  );
};

export default ContactForm;