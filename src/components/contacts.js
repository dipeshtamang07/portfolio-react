import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contacts extends Component {
  state = {};
  render() {
    return (
      <div className="contacts-content">
        <Grid className="contacts-grid">
          <Cell col={6}>
            <h2>Dipesh Tamang</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <List>
              <ListItem>
                <ListItemContent icon="phone">(+91) 9763532546</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent icon="email">
                  dtamang582@gmail.com
                </ListItemContent>
              </ListItem>
            </List>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contacts;
