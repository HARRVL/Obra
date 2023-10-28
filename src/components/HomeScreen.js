
import React from 'react';

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="logo-section">
        <img src="/path-to-logo.png" alt="OBRA Logo" />
        <h1>OBRA</h1>
      </div>
      <input type="text" placeholder="Search for jobs or employers" className="search-bar" />
      <div className="user-type-section">
        <button>Job Seeker</button>
        <button>Employer</button>
      </div>
      <div className="featured-section">
        {/* Display featured jobs or employers */}
      </div>
    </div>
  );
};

export default HomeScreen;
