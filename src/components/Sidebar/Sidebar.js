import React from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faArchive, faPlus, faShoppingCart, faSignOutAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
             <ul className="list-unstyled">
                 <li>
                 <img src={logo} height="60px" alt=""/>
                 </li>
            <li>
              <Link to="/order" className="text-white">
                <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
              </Link>
            </li>
            <li>
              <Link to="/service-list" className="text-white">
              <FontAwesomeIcon icon={faArchive} /> <span>Your Services</span>
              </Link>
            </li>
            <li>
              <Link to="/review" className="text-white">
              <FontAwesomeIcon icon={faAddressCard} /> <span>Review</span>
              </Link>
            </li>

            <li>
              <Link to="/admin" className="text-white">
              <FontAwesomeIcon icon={faArchive} /> <span>Service list</span>
              </Link>
            </li>
            <li>
              <Link to="/add-service" className="text-white">
                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
              </Link>
            </li>
            
            <li>
              <Link to="/make-admin" className="text-white">
              <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
              </Link>
            </li>
  
          </ul>
          <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;