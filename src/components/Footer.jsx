import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>MetroNews is your source for the latest news, trends, and insights. Stay informed with us!</p>
          </div>
          <div className="col-md-4">
            <h5>Boards</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link" >Home</a></li>
              <li><a href="#" className="footer-link" >About</a></li>
              <li><a href="#" className="footer-link" >Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link" >Facebook</a></li>
              <li><a href="#" className="footer-link" >Twitter</a></li>
              <li><a href="#" className="footer-link" >Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center">© 2024 MetroNews. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;