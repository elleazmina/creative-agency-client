import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Sidebar/Sidebar";
import ServiceDataTable from "../ServiceDataTable/ServiceDataTable";

const AllServices = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://radiant-springs-91850.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="row" >
            <div className="col-md-5">
              <Sidebar></Sidebar>
            </div>
            <div className="col-md-7 p-4 pr-5">
                <ServiceDataTable orders={orders}></ServiceDataTable>
            </div>
        </div>
  );
};

export default AllServices;
