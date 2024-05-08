import React from 'react';

function NewsItem({ title, description, imageUrl, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="news-item-link">
      <div className="news-item">
        {imageUrl && <img src={imageUrl} alt={title} className="news-item-image" />}
        <div className="news-item-content">
          <h3 className="news-item-title">{title}</h3>
          <p className="news-item-description">{description}</p>
        </div>
      </div>
    </a>
  );
};
