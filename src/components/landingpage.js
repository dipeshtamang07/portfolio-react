import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="landing-container">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="http://liberalgroup.net/wp-content/uploads/2018/05/avatar_male.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="designation-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | Python | Javascript | React | NodeJs |
                MySQL | Express
              </p>
              <div className="social">
                <a
                  href="https://www.linkedin.com/in/dipesh-tamang-562854177/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="btn-link"
                >
                  <i className="fa fa-linkedin" />
                </a>

                <a
                  href="https://www.instagram.com/dipesh1999/?hl=en"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="btn-link"
                >
                  <i className="fa fa-instagram" />
                </a>

                <a
                  href="http://www.facebook.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="btn-link"
                >
                  <i className="fa fa-facebook" />
                </a>

                <a
                  href="https://github.com/dipeshtamang07"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="btn-link"
                >
                  <i className="fa fa-github" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
