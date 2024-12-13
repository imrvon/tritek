import styles from "./Contact.module.css";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>How can we help your business to grow?</h2>
          <p>
            We bring the breathe of our experience and industry knowledge to
            help you succeed
          </p>
        </div>
        <div className={styles.form}>
          <form action="#">
            <div className={styles.wrapper}>
              <div>
                <input
                  type="text"
                  placeholder="Firest Name"
                  className={styles.input}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className={styles.input}
                />
              </div>
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
                className={styles.input}
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message*"
              ></textarea>
            </div>
            <button className={styles.btn}>send a message</button>
          </form>
        </div>
      </div>

      <div>
        <div className={styles.call}>
          <h3>Call-us</h3>
          <p><a href="tel:+1-800-700-600">1-800-700-600</a></p>
        </div>
        <div className={styles.visit}>
          <h3>Visit-us</h3>
          <p><b>Working hours: </b>
          <br/>
Monday - Friday
9 am to 7 pm EST</p>
        </div>
        <div className="follow-us">
          <h3>Follow-us</h3>
          <div className={styles.icons}>
            <FaFacebook />
            <FaTwitter />
            <RiInstagramFill />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
