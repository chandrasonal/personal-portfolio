import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h1>CONTACT ME</h1>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
              <div className="contact-details-container">
              <div className="contact-details">
              <p><strong>Address:</strong> House no: 110, Jagaran Marg, Dhapakhel, Lalitpur, Nepal. Pincode: 44600</p>
              </div>
              <div className="contact-details">
                <p><strong>Email me:</strong> <a href="mailto:chandrasonal0@gmail.com">chandrasonal0@gmail.com</a></p>
              </div>
              <div className="contact-details">
                <p><strong>Phone:</strong> +977 9867068817 / +91 8093759725</p>
              </div>
            </div>
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                {/* <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div> */}
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
