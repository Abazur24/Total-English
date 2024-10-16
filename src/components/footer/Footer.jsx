import React from 'react';
import './footer.scss';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'; // Importing Font Awesome icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Information */}
        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>Email: info@totalenglish.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Learning St, Education City</p>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/about-us">About Us</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="newsletter">
          <h4>Subscribe to Our Newsletter</h4>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Total English. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;