import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import Starbar from './Starbar';
import { Link } from 'react-router-dom';


class Project extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.match.params.id);
  }
    
      render() {
        // this.state.projects[0] = this.props.details
        //   this.props.details

        return (
          <div>
            <Starbar />
            <Link to={"/projects/" + this.props.details.id}>{this.props.details.title}</Link>
            <img src={this.props.details.image} alt="body art"/>
            <p>{this.props.details.description}</p>
            <a href={this.props.details.link}>Link</a>

          </div>
        );
      }
    }
    
    export default withRouter(Project);

   