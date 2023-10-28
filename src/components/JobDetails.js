// JobDetails.js

import React from 'react';

const JobDetails = ({ job }) => {
    return (
        <div className="job-details">

            {/* Job Summary */}
            <div className="job-summary">
                <h2>{job.title}</h2>
                <h3>{job.companyName}</h3>
                <p>{job.location}</p>
            </div>

            {/* Job Description */}
            <div className="job-description">
                <h4>Description:</h4>
                <p>{job.description}</p>
                
                <h4>Requirements:</h4>
                <p>{job.requirements}</p>

                <h4>Benefits:</h4>
                <p>{job.benefits}</p>
            </div>

            {/* Apply Button */}
            <button className="apply-btn">Apply</button>

            {/* Company Rating and Reviews */}
            <div className="company-reviews">
                <h4>Company Rating:</h4>
                <p>{job.rating}</p>

                <h4>Reviews:</h4>
                {job.reviews.map((review, index) => (
                    <div key={index}>
                        <h5>{review.author}</h5>
                        <p>{review.text}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default JobDetails;
