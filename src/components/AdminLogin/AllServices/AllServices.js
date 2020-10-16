import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Sidebar/Sidebar";
import ServiceDataTable from "../ServiceDataTable/ServiceDataTable";

const AllServices = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="container-fluid row" >
            {/* <Sidebar></Sidebar> */}
            <div className="col-md-10 p-4 pr-5">
                <ServiceDataTable orders={orders}></ServiceDataTable>
            </div>
        </div>
  );
};

export default AllServices;
