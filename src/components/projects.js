import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import ProjectCard from "./ProjectCard";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="container-fluid" style={{ width: "100%" }}>
          <div className="row" style={{ justifyContent: "flex-start" }}>
            <div className="col-sm m-3">
              <ProjectCard
                title="BookStore App"
                description="CRUD App to store and manage book info"
                github_link="https://github.com/dipeshtamang07/react_bookstore_crud_app"
              />
            </div>

            <div className="col-sm m-3">
              <ProjectCard
                title="Calculator App"
                description="A simple calculator which helps in mathematical calculations..."
              />
            </div>

            <div className="col-sm m-3">
              <ProjectCard
                title="Weather App"
                description="Provides Real Time weather info of various places around the world..."
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm m-3">
              <ProjectCard
                title="BookStore App"
                description="CRUD App to store and manage book info"
                github_link="https://github.com/dipeshtamang07/react_bookstore_crud_app"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm m-3">
              <ProjectCard
                title="Department App"
                description="CRUD App to store and manage student info, internships, activities, projects etc.."
                github_link="https://github.com/dipeshtamang07/react_bookstore_crud_app"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>Python</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>NodeJS</Tab>
          <Tab>Yii2</Tab>
          <Tab>Python</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>{this.toggleCategories()}</Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
