import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const ServiceList = () => {
    return (
        <section className="row">
      <div className="col-md-5">
      <Sidebar></Sidebar>
      </div>

      <div className="col-md-5 col-sm-12 col-12 my-5">
          <h3>Your Services are:</h3>
          </div>
          </section>
    );
};

export default ServiceList;