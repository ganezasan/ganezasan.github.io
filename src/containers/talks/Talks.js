import React from 'react';
import Markdown from 'react-markdown';
import './Talks.css';
import talks from './talks.md';

function Talks(props){
  const source = decodeURIComponent(escape(atob(talks.split(',')[1])));

  return (
    <div className="talks">
      <Markdown className={"mark-down"} source={source} />
    </div>
  );
}

export default Talks;
