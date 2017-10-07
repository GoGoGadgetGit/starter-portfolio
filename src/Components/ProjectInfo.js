import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectInfo extends Component {
  render() {
    const project = this.props.project;

    return (
      <div>
        <Link to={'/projects/' + project.id }>
        <div>
          <h3>{project.name}</h3>
          <img src={project.image}/>
        </div>
        </Link>
      </div>
    )
  }
}

export default ProjectInfo;