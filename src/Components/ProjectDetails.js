import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



class ProjectDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects : [{
              title : "Australian Aboriginal",
              image : "http://n7.alamy.com/zooms/b30193ccac9e4eabbcb2f701575b855c/portrait-of-a-young-aboriginal-boy-in-tribal-body-paint-laura-queensland-c1m2t2.jpg",
              description : "aboriginal tribal art",
              link : "https://en.wikipedia.org/wiki/Tribal_art"
            }, {
              title : "Sub-Saharan African",
              image : "https://d1o50x50snmhul.cloudfront.net/wp-content/gallery/dn16141-living-africa/005024-sb1.jpg",
              description : "african tribal art",
              link : "https://en.wikipedia.org/wiki/Tribal_art"
            }, {
              title : "Polynesian",
              image : "https://i.pinimg.com/originals/68/e0/16/68e016edb6c7cd59397c00f0ca62ab45.jpg",
              description : "art from Polynesia",
              link : "https://en.wikipedia.org/wiki/Tribal_art"
            }, {
              title : "Central African",
              image : "https://i.pinimg.com/originals/5f/82/e2/5f82e27d4e13b8da2ce7df473adbc750.jpg",
              description : "art from the Congo",
              link : "https://en.wikipedia.org/wiki/Tribal_art"
            }]
          }
    }
    render() {
        const papa = this.props.match.params;
        const pro = this.state.projects[papa.id];

      return (
        <div>
            <h2>{pro.title}</h2>
            <img src={pro.image} alt="body art"/>
            <p>{pro.description}</p>
            <a href={pro.link}>Link</a>
        </div>
      );
    }
  }
  
  export default withRouter(ProjectDetails);