import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h1 className="text-center mb-4 text-primary">About Happy Journey</h1>

        <p className="lead text-center">
          Welcome to <strong>Happy Journey</strong> — Simple and friendly
          Train Schedule Viewer for Madhya Pradesh!
        </p>

        <p className="text-center">
          This project allows you to search trains starting from Bhopal and
          traveling across various cities in MP. You can view train numbers,
          names, days of operation, full routes with arrival times, and more.
        </p>

        <p className="text-center">
          Built with ❤️ using React, Express, and MongoDB.
        </p>

        <p className="text-center text-muted">
          Developed by <strong>Faiz Khan 🚆</strong>
        </p>
      <div className="text-center mt-4">
          <Link to="/" className="btn btn-outline-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
