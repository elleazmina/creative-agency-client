import React from 'react';
import airbnb from '../../../images/logos/airbnb.png'
import google from '../../../images/logos/google.png'
import netflix from '../../../images/logos/netflix.png'
import slack from '../../../images/logos/slack.png'
import uber from '../../../images/logos/uber.png'

const Logos = () => {
    return (
        <div class="container my-5">
  <div class="row row-cols-5">
    <div class="col">
        <img src={slack} style={{height:'40px'}} alt=""/>
    </div>
    <div class="col">
        <img src={google} style={{height:'45px'}} alt=""/>
    </div>
    <div class="col">
        <img src={uber} style={{height:'50px'}} alt=""/>
    </div>
    <div class="col">
        <img src={netflix} style={{height:'60px'}} alt=""/>
    </div>
    <div class="col">
        <img src={airbnb} style={{height:'50px'}} alt=""/>
    </div>
  </div>
</div>
    );
};

export default Logos;