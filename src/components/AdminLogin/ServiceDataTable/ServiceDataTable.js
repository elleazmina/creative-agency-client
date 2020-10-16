import React from "react";

const ServiceDataTable = ({ orders }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary" scope="col">
            Name
          </th>
          <th className="text-secondary" scope="col">
            Email
          </th>
          <th className="text-secondary" scope="col">
            Service
          </th>
          <th className="text-secondary" scope="col">
            Details
          </th>
          <th className="text-secondary" scope="col">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.service}</td>
            <td>{order.details}</td>
            <td>
              <div class="dropdown">
                <button
                  className="btn btn-danger dropdown-toggle"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Action
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">
                    Pending
                  </a>
                  <a className="dropdown-item" href="#">
                    Approved
                  </a>
                  <a className="dropdown-item" href="#">
                    Done
                  </a>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ServiceDataTable;
