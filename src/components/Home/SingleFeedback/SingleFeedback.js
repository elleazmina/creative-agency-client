import React from 'react';

const SingleFeedback = ({feedback}) => {
    return (
        <div className="card shadow-sm" style={{fontFamily: 'Poppins'}}>
        <div className="card-body d-flex  align-items-center">
          <img className="mx-3" src={feedback.image} alt="" width="60" />
          <div>
            <h6><b>{feedback.name}</b></h6>
            <p className="m-0 text-secondary">{feedback.designation}</p>
          </div>
        </div>
        <div className="card-body">
          <p style={{ color: "#3A4256" }} className="card-text">{feedback.review}
          </p>
        </div>
      </div>
    );
};

export default SingleFeedback;