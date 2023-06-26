import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { validateEmail } from '../utils/helpers';

const Contact = () => {
  const [contactMessage, setContactMessage] = useState('');
  const [contactFirstName, setContactFirstName] = useState('');
  const [contactLastName, setContactLastName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      setContactEmail('');
      if (!validateEmail(contactEmail)) {
        setEmailError('Please enter a valid email');
      }
      setContactFirstName('');
      setContactLastName('');
      setContactMessage('');

      axios
        .post("https://getform.io/f/7c090aea-f38b-4828-a922-5b7ece892e50", {
          firstname: contactFirstName,
          lastname: contactLastName,
          email: contactEmail,
          message: contactMessage,
        },
        { headers: { 'Accept': 'application/json' } })
        .then(response => console.log(response))
        .catch(error => console.log(error))

    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'contactMessage') {
      setContactMessage(value);
    }
    if (name === 'contactFirstName') {
      setContactFirstName(value);
    }

    if (name === 'contactLastName') {
      setContactLastName(value);
    }

    if (name === 'contactEmail') {
      setContactEmail(value);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <Card className="w-50 p-4">
        <Card.Body>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                name="contactFirstName"
                placeholder="First Name"
                value={contactFirstName}
                className="form-control mb-3"
                onChange={handleChange}
              />
              <input
                name="contactLastName"
                placeholder="Last Name"
                value={contactLastName}
                className="form-control mb-3"
                onChange={handleChange}
              />
              <input
                name="contactEmail"
                placeholder="Email"
                value={contactEmail}
                className="form-control mb-3"
                onChange={handleChange}
              />
              {emailError && <p className="error-text">{emailError}</p>}
              <textarea
                name="contactMessage"
                placeholder="Add your message..."
                value={contactMessage}
                className="form-control mb-3"
                onChange={handleChange}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
