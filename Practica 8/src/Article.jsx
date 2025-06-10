import React from 'react';
import './App.css';

const Article = ({ title, content, image }) => {
  return (
    <div className="article">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{content}</p>
    </div>
  );
};

export default Article;