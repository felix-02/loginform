import React from "react";
import styles from "./form.module.css";
import image from './image.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
export default class Form extends React.Component {
  state = {
    name: "",
    password: "",
    isVisible: false,
  };

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  toggle = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <img src={image} alt="" width="100"/>
          </div>
          <h1 className={styles.title}>Worksana</h1>
          <p className={styles.header}>Sign in</p>

          <div className={styles.labeldiv1}>
            <label className={styles.label}>Email Address/Username</label>
            <input
              className={styles.input}
              type="text"
              name="name"
              onChange={this.changeHandle}
              placeholder="username"
              value={this.state.name}
            />
          </div>
          <div className={styles.labeldiv2}>
            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              type={this.state.isVisible ? "text" : "password"}
              name="password"
              onChange={this.changeHandle}
              placeholder="password"
              value={this.state.password}
            />
            <span className={styles.eye} onClick={this.toggle}>
              {" "}
              {this.state.isVisible ? (
                <FontAwesomeIcon color="black" icon={faEye} />
              ) : (
                <FontAwesomeIcon color="teal" icon={faEyeSlash} />
              )}
            </span>
          </div>
          <div className={styles.signedwrapper}>
            <a className={styles.link} href="/">Forgot Password</a>
            <button className={styles.signinbtn}>Sign in </button>
          </div>
          <hr className={styles.hr} />
          <div className={styles.register}>
            <span>Don't have an account? </span>
            <a className={styles.link} href="/">Start my free trial</a>
          </div>
          <div>
            <span>looking for the kiosk? </span>
            <a className={styles.link} href="/">Click here</a>
          </div>
        </div>
      </div>
    );
  }
}
