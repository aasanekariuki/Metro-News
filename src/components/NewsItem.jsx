<<<<<<< HEAD
const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
      <img src={src} style={{height:"200px", width:"330px"}} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">
          {description? description.slice(0,90): 'More information is available. Click the Read More button'}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
=======
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
>>>>>>> origin
