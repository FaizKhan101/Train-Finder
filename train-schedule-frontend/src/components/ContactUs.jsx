import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h1 className="text-center mb-4 text-success">Contact Us</h1>

        <p className="lead text-center">
          Have questions or suggestions? Feel free to reach out!
        </p>

        <div className="text-center mt-4">
          <h5>Email:</h5>
          <p>
            <a href="mailto:faizkhan8225@gmail.com">faizkhan8225@gmail.com</a>
          </p>

          <h5>Contact Number:</h5>
          <p>
            <a href="tel:+919340458100">+91 9340458100</a>
          </p>
        </div>

        <div className="text-center mt-4">
          <Link to="/" className="btn btn-outline-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

