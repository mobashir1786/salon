import React from 'react';
import About from './About';
import Contact from './Contact';
import ServicePage from './ServicePage';

const Homepage = () => {
    return (
        <div className="home">
        <div className="homepage">
        <img src="https://getlook.in/static/media/Top-Banner-3.90c7460a.png" alt="home data" />
        </div>
        <div className="homeimg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49_dbvCtOBPLvm-Bp_ZbNb8MK7x1NWyE4FQ&usqp=CAU" alt="homeimg" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZAHh1Y24AqjfMlW_lT47-qxy3Fo-hzFdaA&usqp=CAU" alt="homeimg" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaar_6ctPPnKUMLj5EXpxFheDHF5d8uXlzNA&usqp=CAU" alt="homeimg" />
        </div>
        <ServicePage/>
        <Contact/>
        <About/>
        </div>
    );
}

export default Homepage;
