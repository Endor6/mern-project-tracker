import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ProjectsList from "./components/projects-list.component";
import EditProjects from "./components/edit-projects.component";
import CreateProject from "./components/create-project.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path = "/" exact component = {ProjectsList} />
        <Route path = "/edit/:id" component = {EditProjects} />
        <Route path = "/create" component = {CreateProject} />
        <Route path = "/user" component = {CreateUser} />
      </div>
    </Router>
  );
}

export default App;
