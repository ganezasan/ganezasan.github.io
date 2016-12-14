import React from 'react';
import Markdown from 'react-markdown';
import './Works.css';
import works from './works.md';

function Works(props){
  const source = decodeURIComponent(escape(atob(works.split(',')[1])));

  return (
    <div className="works">
      <Markdown className={"mark-down"} source={source} />
    </div>
  );
}

export default Works;
