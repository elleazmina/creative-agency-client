import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Order = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        fetch('https://radiant-springs-91850.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success) {
                alert('Your Order has been registered');
            }
        })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
          <input
            type="text"
            name="name"
            ref={register({ required: true})}
            placeholder="Your name/Company's name"
            class="form-control"
            id=""
          />
        </div>
        <div class="form-group">
          <input
            ref={register({
              required: "Required"
            })}
            type="text"
            name="email"
            placeholder="Your email address"
            class="form-control"
            id=""
          />
          
        </div>
        <div class="form-group">
          <input
            type="text"
            name="service"
            ref={register({ required: true})}
            placeholder="Service you want"
            class="form-control"
            id=""
          />
          
        </div>
        <div className="form-group">
          <textarea
            ref={register({ required: true})}
            name="details"
            className="form-control"
            id=""
            cols="30"
            rows="10"
            placeholder="Your project details"
          ></textarea>
        </div>
        <div class="form-row">
<div class="form-group col-md-4">
  
  <input type="text" placeholder="Price" class="form-control" id=""required/>
</div>
<div class="form-group col-md-8">
  <label htmlFor="files" className="btn btn-outline-success ml-3"><FontAwesomeIcon icon={faCloudUploadAlt}/>Upload project file</label>
  <input type="file" style={{visibility: 'hidden'}} placeholder="upload project file" class="form-control w-25 py-4" id="files"/>
</div>
</div>

        <div className="form-group">
          <button type="submit" className="btn btn-dark btn-lg">
            {" "}
            Send{" "}
          </button>
        </div>
      </form>
    );
};

export default Order;