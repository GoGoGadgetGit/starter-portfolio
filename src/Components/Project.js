import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import Starbar from './Starbar';

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
            {/* <Starbar /> */}
            <h2>{this.props.details.title}</h2>
            <img src={this.props.details.image}/>
            <p>{this.props.details.description}</p>
            <a href={this.props.details.link}>Link</a>

          </div>
        );
      }
    }
    
    export default withRouter(Project);

   