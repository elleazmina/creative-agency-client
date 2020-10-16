import React, { useEffect, useState } from "react";
import service1 from "../../../images/icons/service1.png";
import service2 from "../../../images/icons/service2.png";
import service3 from "../../../images/icons/service3.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
// const serviceData = [
//     {
//       name: "Web & Mobile Design",
//       img: service1,
//       description:'We craft stunning and amazing web UI, using a well drafted UX to fit your product.'
//     },
//     {
//       name: "Graphic Design",
//       img: service2,
//       description:'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
//     },
//     {
//       name: "Web development",
//       img: service3,
//       description:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
//     },
//   ];

const Services = () => {
  const [services, setServices] = useState([]);
useEffect(() => {
  fetch("http://localhost:5000/services") 
    .then((res) => res.json())
    .then((data) => setServices(data));
}, []);
  return (
    <section>
      <div className="text-center">
        <h2 style={{ fontFamily: "Poppins", fontWeight: "600" }}>
          Provide awesome <span style={{ color: "#7AB259" }}> services</span>
        </h2>
      </div>

      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5 pt-5">
          {services.map((service) => (
            <ServiceDetail key={service._id} service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
