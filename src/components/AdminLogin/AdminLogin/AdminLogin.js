import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import AllServices from '../AllServices/AllServices';

const AdminLogin = () => {
    return (
        <section className="container-fluid row">
        <Sidebar></Sidebar>

        <div className="col-md-5 col-sm-12 col-12 my-5">
         <AllServices></AllServices>
        </div>

    </section>
    );
};

export default AdminLogin;