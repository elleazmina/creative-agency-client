import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       <section className="contact container-fluid my-5 py-5">
           <div className="row">
           <div className="col-md-4 offset-md-1">
            <h1 style={{fontFamily: 'Poppins', fontWeight: '600'}}>Let use handle your <br/>project, professionally</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non at ducimus voluptatibus perferendis aspernatur molestias molestiae.</p>
        </div>
               <div className="col-md-6 mx-2">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your email address"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your name/company's name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button className="btn btn-dark btn-lg"> Send </button>
                       </div>
                 </form>
                 
               </div>
               
           </div>
           <footer>
           <div className="copyRight text-center text-secondary">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
           </footer>
       </section>
    );
};

export default Contact;