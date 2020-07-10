import React, { Component } from "react";
import styles from "../LoginForm/styles.module.css";
import logo from "../images/plogo.png";

import { FaEdit } from "react-icons/fa";

export class Profile extends Component {
  render() {
    return (
      <div>
        <div className={styles.body}>
          <div className={styles.content}>
            <div className={styles.nav}>
              <ul>
                <li>
                  <div style={{ textAlign: "center" }}>
                    {" "}
                    <b>10</b>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "13px",
                        color: "grey",
                        fontFamily: '"Comic Sans MS", cursive, sans-serif',
                      }}
                    >
                      Total Projects
                    </p>
                  </div>
                </li>{" "}
                <li>
                  <div style={{ textAlign: "center" }}>
                    <b>10</b>
                    <p
                      style={{
                        textAlign: "center",
                        color: "grey",
                        fontSize: "13px",
                        fontFamily: '"Comic Sans MS", cursive, sans-serif',
                      }}
                    >
                      Completed Projects
                    </p>
                  </div>
                </li>{" "}
                <li>
                  <div style={{ textAlign: "center" }}>
                    <b>10</b>
                    <p
                      style={{
                        textAlign: "center",
                        color: "grey",
                        fontSize: "13px",
                        fontFamily: '"Comic Sans MS", cursive, sans-serif',
                      }}
                    >
                      Current Projects
                    </p>
                  </div>
                </li>{" "}
                <li>
                  <a href="https://www.pronteff.com/" target="_blank">
                    <img src={logo} alt="" />
                  </a>
                </li>
                <li></li>
                <li></li> <li></li>
                <li></li> <li></li> <li></li> <li></li> <li></li> <li></li>{" "}
                <li></li> <li></li> <li></li> <li></li> <li></li>
                <li></li> <li></li> <li></li> <li></li>
                <li>
                  <div>
                    <button style={{ paddingTop: "15px", textAlign: "center" }}>
                      <FaEdit />
                      edit profile
                    </button>
                  </div>
                </li>{" "}
              </ul>
            </div>
            <br />
            <div>
              <p style={{ fontSize: "25px", fontFamily: "Segoe Script" }}>
                Sravan Kumar Reddy , 24
              </p>
              <p style={{ fontFamily: "Courier New" }}>Software Trainee</p>
              <p style={{ fontFamily: "Ink Free" }}>Pronteff It Solutions</p>
              <p style={{ fontFamily: "MV Boli" }}>Madhapur Hyderabad</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
