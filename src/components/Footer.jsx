import React from "react";

function Footer() {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="footer-content">
        {/* Newsletter Subscription Form */}
        <div className="newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
          >
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Copyright and Back to Top Button */}
        <div className="footer-bottom">
          <p>
            Copyright © {new Date().getFullYear()} Keeper App. All rights
            reserved.
          </p>
          <button onClick={scrollToTop} className="back-to-top">
            <i className="fas fa-arrow-up"></i> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
