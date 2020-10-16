import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../Sidebar/Sidebar";

const AddService = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = e => {
    const newInfo = {...info};
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  }

    const handleFileChange = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile);
    }
    const {register, handleSubmit} = useForm();
    const onSubmit = () => {
      const formData = new FormData()
      formData.append('file', file);
      formData.append('title', info.title);
      formData.append('description', info.description);

      fetch('http://localhost:5000/addService', {
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
    <section className="container-fluid row">
      <Sidebar></Sidebar>

      <div className="col-md-5 col-sm-12 col-12 my-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              onBlur={handleBlur}
              type="text"
              name="title"
              ref={register({ required: true })}
              placeholder="Service title"
              class="form-control"
              id=""
            />
          </div>
          <div className="form-group">
            <textarea
              onBlur={handleBlur}
              ref={register({ required: true })}
              name="description"
              className="form-control"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Description"
            ></textarea>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8">
              <label htmlFor="files" className="btn btn-outline-success ml-3">
                <FontAwesomeIcon icon={faCloudUploadAlt} />
                Upload an image
              </label>
              <input
                onChange={handleFileChange}
                type="file"
                style={{ visibility: "hidden" }}
                placeholder=""
                class="form-control w-25 py-4"
                id="files"
              />
            </div>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-info btn-lg">
              {" "}
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddService;
