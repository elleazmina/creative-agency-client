import React from 'react';
import './HeaderMain.css'
import Frame from '../../../images/logos/Frame.png'
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main style={{height:'700px'}} className="background row d-flex align-items-center mb-10"> 
        <div className="col-md-3 offset-md-1">
            <h1 style={{fontFamily: 'Poppins', fontWeight: '600'}}>Let's Grow Your <br/>Brand To The <br/>Next Level</h1>
            <p>Investing in creative design is the key to getting your business to stand out. Creative agency provides you with the knowledge necessary to help your company grow!</p>
            <Link to="/order">
            <button className="btn btn-dark btn-lg">
                Hire us
            </button>
            </Link>
        </div>
        <div className="col-md-6 ml-5">
            <img src={Frame} alt="" className="img-fluid"/>
        </div>
    </main>
    );
};

export default HeaderMain;