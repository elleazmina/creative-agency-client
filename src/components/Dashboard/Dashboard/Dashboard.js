import React from 'react';
import Order from '../../CustomerLogin/Order/Order';
import Sidebar from '../../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section className="row">
            <div className="col-md-5">
            <Sidebar></Sidebar>
            </div>
        
 
         <div className="col-md-5 col-sm-12 col-12 my-5">
          <Order></Order>
         </div>
 
     </section>
    );
};

export default Dashboard;