import React from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Logos from '../Logos/Logos';
import Services from '../Services/Services';
import Works from '../Works/Works';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Logos></Logos>
            <Services></Services>
            <Works></Works>
            <ClientFeedback></ClientFeedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;