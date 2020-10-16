import React, { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import { useForm } from "react-hook-form";

const Review = () => {
  const [info, setInfo] = useState({});
  // const [file, setFile] = useState(null);
  const handleBlur = e => {
    const newInfo = {...info};
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  }

    // const handleFileChange = (e) => {
    //   const newFile = e.target.files[0];
    //   setFile(newFile);
    // }
    const {register, handleSubmit} = useForm();
    const onSubmit = () => {
      const formData = new FormData()
      formData.append('name', info.name);
      formData.append('designation', info.designation);
      formData.append('review', info.review);

      fetch('https://radiant-springs-91850.herokuapp.com/addReview', {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
    }
  return (
    <section className="row">
      <div className="col-md-5">
      <Sidebar></Sidebar>
      </div>

      <div className="col-md-5 col-sm-12 col-12 my-5">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              onBlur={handleBlur}
              type="text"
              name="name"
              ref={register({ required: true })}
              className="form-control"
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <input
              onBlur={handleBlur}
              type="text"
              ref={register({ required: true })}
              className="form-control"
              placeholder="Designation, Company's name"
              name="designation"
              id=""
            />
          </div>
          <div className="form-group">
            <textarea
              onBlur={handleBlur}
              ref={register({ required: true })}
              className="form-control"
              name="review"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Review"
            ></textarea>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-dark btn-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Review;
