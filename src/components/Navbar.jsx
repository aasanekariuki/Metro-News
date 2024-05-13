import React from "react"
import { useState } from "react";


const Navbar = () => {


  const [searchQuery, setSearchQuery] = useState('');

  const [searchResults, setSearchResults] = useState([]);

  const apiKey ='80578b79a6554b3a88e42998ea4572f9'

  const handleSearch = async () => {
    try {
    
      const response = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&pageSize=20&apiKey=${apiKey}`);
      const data = await response.json();
      
      setSearchResults(data.articles);
      console.log('Search results:', data.articles);
    } catch (error) {
      console.error('Error searching news:', error);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };



  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      
      <button class="button" data-text="Awesome">
    <span className="actual-text">&nbsp;MetroNews&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;MetroNews&nbsp;</span>
</button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
        
        </ul>

        <form className="form-inline ml-auto">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={handleInputChange} value={searchQuery}  />
              <div className="input-group-append">
                <button className="btn btn-outline-light" type="button" onClick={handleSearch} ><i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>

      </div>
    </div>

    <div className="container mt-3">
        <h2>Search Results</h2>
        <div className="row">
          {searchResults.map((article, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card">
                <img src={article.urlToImage} className="card-img-top" alt={article.title} />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  </nav>
  )
}

export default Navbar
