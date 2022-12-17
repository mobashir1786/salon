import React from 'react';
import Card1 from '../component/card1';
import data1 from '../material/data1'

const About = () => {
    // console.log(data1);
    return (
        <div className='about'>
        <span style={{color:"#105652",font: "normal normal bold 35px/44px Inter",opacity: "1",margin:"10px",borderBottom:"5px solid #FCA738"}}>Why Beauty Salon</span>
        <div className='aboutcards'>
            {
                data1.map((n)=>(<Card1 head={n.heading} para={n.para} key={n.id}/>))
            }
        </div>
        </div>
    );
}

export default About;
