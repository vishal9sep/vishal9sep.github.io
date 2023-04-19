import LightWave from "../Waves/LightWave";
import "./Contact.css";
import {
  FaLinkedin,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
  FaPhoneAlt,
  FaPhoneSquare,
  FaPhoneSquareAlt,
  FaWhatsapp,
  FaWhatsappSquare,
  IoCallSharp,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div data-aos="fade-right" className="contact__body">
        <h2 className="contact__heading">Contact Me</h2>
        <p className="contact__p">
          Currently I am looking for a job as a Java Backend Developer
        </p>
        <div className="contact__option">
          <FaMailBulk className="contact__logo" size={45} />
          <a href="mailto: vishal9sept@gmail.com">
            <span className="contact__text">vishal9sept@gmail.com</span>
          </a>
        </div>
        <div className="contact__option">
          <FaLinkedinIn className="contact__logo" size={45} />
          <a
            href="https://www.linkedin.com/in/vishal-singh-326a71224/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my Linkedin"
          >
            <span className="contact__text">LinkedIn Profile</span>
          </a>
        </div>
        <div className="contact__option">
          <FaPhoneAlt className="contact__logo" size={40} />
          <a
            href="tel:9476300091"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my Linkedin"
          >
            <span className="contact__text">+91 7003118070</span>
          </a>
        </div>
        {/* <div className="contact__option">
          <FaWhatsapp className="contact__logo" size={45} />
          <a
            href="tel:9476300091"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my Linkedin"
          >
            <span className="contact__text">+91 9476300091</span>
          </a>
        </div> */}
      </div>
      <LightWave />
    </section>
  );
}

export default Contact;
