import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "If you don't take risks, you can't create a future. - Monkey D. Luffy",
  "What are you so hesitant about? It’s your dream, isn’t it? It’s right in front of you, and you’re wavering? You gotta be reckless and take whatever you can!. - Tomoya Okazaki, Clannad",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "Hard work is worthless for those that don’t believe in themselves. - Naruto Uzumaki"
];

export const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate__fadeIn');

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setAnimationClass('animate__fadeOut');
      setTimeout(() => {
        setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
        setAnimationClass('animate__fadeIn');
      }, 500); // Duration of fade-out animation
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
          <Col size={12} sm={12} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/chandrasonal/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/chandra.sonal.39" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/chandrasonal__/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
              <a href="mailto:chandrasonal0@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={navIcon4} alt="Gmail" />
              </a>
            </div>
            <p>{quotes[currentQuote]}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
