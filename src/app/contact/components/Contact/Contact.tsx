'use client';

import styles from "./Contact.module.css";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";

function Contact() {

  const [isEmailValid, setEmailValid] = useState(true)
  const [isLastNameValid, setLastNameValid] = useState(true)
  const [isFirstNameValid, setFirstNameValid] = useState(true)
  const [isMessageValid, setMessageValid] = useState(true)

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
 
  const updateEmail = (email: string) => {
    setUser({
      ...user,
      email
    });
    let isValid = (/^[\w._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email)
    setEmailValid(isValid)
  };
  const updateFirstName = (firstName: string) => {
    setUser({
      ...user,
      firstName
    })
    let valid = /\b[A-Za-z]+\b/g
    let wordLength = firstName.match(valid)?.length || 0
    let state = (wordLength == 1)? true : false
    setFirstNameValid(state)
  }
  const updateLastName = (lastName: string) => {
    setUser({
      ...user,
      lastName
    })
    let valid = /\b[A-Za-z]+\b/g
    let wordLength = lastName.match(valid)?.length || 0
    let state = (wordLength == 1)? true : false
    setLastNameValid(state)
  }
  const updateMessage = (message: string) => {
    setUser({
      ...user,
      message
    })
    let valid = /\w+/g
    let wordLength = message.match(valid)?.length || 0
    let state = (wordLength >= 3)? true : false
    setMessageValid(state)
  }

  const validateDate = ()=> {
    return false
  }

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
          <form action="#" onSubmit={(e)=> {e.preventDefault(); validateDate()}}>
            <div className={styles.wrapper}>
              <div className={isFirstNameValid? styles.valid : styles.invalid}>
                <input
                  type="text"
                  name="first name"
                  placeholder="Firest Name"
                  className={isFirstNameValid? styles.input : styles.error}
                  onChange={(e)=> updateFirstName(e.target.value)}
                />
                <p>field required</p>
              </div>
              <div className={isLastNameValid? styles.valid : styles.invalid}>
                <input
                  type="text"
                  name="last name"
                  placeholder="Last Name"
                  className={isLastNameValid? styles.input : styles.error}
                  onChange={(e)=>{updateLastName(e.target.value)}}
                />
                <p>field required</p>
              </div>
            </div>
            <div className={isEmailValid? styles.valid : styles.invalid}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
                className={isEmailValid? styles.input : styles.error}
                onChange={(e)=> updateEmail(e.target.value)}
              />
              <p>field required</p>
            </div>
            <div className={isMessageValid? styles.valid : styles.invalid}>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message*"
                onChange={(e)=>updateMessage(e.target.value)}
                className={isMessageValid? styles.input : styles.error}
              ></textarea>
              <p>field required at list 3 words</p>
            </div>
            <button className={styles.btn}>send a message</button>
          </form>
        </div>
      </div>

      <div>
        <div className={styles.call}>
          <h3>Call-us</h3>
          <p>
            <a href="tel:+1-800-700-600">1-800-700-600</a>
          </p>
        </div>
        <div className={styles.visit}>
          <h3>Visit-us</h3>
          <p>
            <b>Working hours: </b>
            <br />
            Monday - Friday 9 am to 7 pm EST
          </p>
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
