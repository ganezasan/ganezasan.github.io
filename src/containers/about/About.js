import React from 'react';
import Markdown from 'react-markdown';
import './About.css';
import about from './about.md';

function About(props){
  const source = decodeURIComponent(escape(atob(about.split(',')[1])));

  return (
    <div className="about">
      <div className="image-box">
        <img src="/profile.jpg" className="rounded-circle profile" alt='takayuki ito'/>
      </div>
      <Markdown className={"mark-down"} source={source} />
    </div>
  );
}

export default About;
