import React, { useEffect, useState } from 'react';
import customer1 from '../../../images/customer-1.png'
import customer2 from '../../../images/customer-2.png'
import customer3 from '../../../images/customer-3.png'
import SingleFeedback from '../SingleFeedback/SingleFeedback';


// const feedbackData = [
//     {
//         id: '1',
//         name:'Nash Patrick',
//         designation: 'CEO, Manpol',
//         feedback:'',
//         image:customer1
//     },
//     {
//         id: '2',
//         name:'Miriam Barron',
//         designation: 'CEO, Manpol',
//         feedback:'',
//         image:customer2
//     },
//     {
//         id: '3',
//         name:'Bria Malone',
//         designation: 'CEO, Manpol',
//         feedback:'',
//         image:customer3
//     }

// ]


const ClientFeedback = () => {
    const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
    return (
        <section className="container-fluid">
            <div className="text-center">
            <h2 style={{fontFamily: 'Poppins', fontWeight:'600'}}>Clients <span style={{color:'#7AB259'}}> Feedback</span></h2>
        </div>
        <div className="d-flex justify-content-center">
          {/* <div className="row w-75 mt-5 pt-5"> */}
          <div className="card-deck w-75 mt-5 pt-5">
            {
                reviews.map(feedback => <SingleFeedback feedback={feedback}></SingleFeedback>)
            }
          </div>
        </div>
        </section>
    );
};

export default ClientFeedback;