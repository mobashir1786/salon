import React from 'react';
import Card from '../component/card';
import data from '../material/data'

const ServicePage = () => {
    // console.log(data);
    return (
        <>
        <span style={{color:"#105652",font: "normal normal bold 35px/44px Inter",opacity: "1",margin:"10px",borderBottom:"5px solid #FCA738"}}>Servises</span>
        <div className='servises'>
            {
                data.map((n)=>(<Card imgurl={n.imgUrl} name={n.name} key={n.id}/>))
            }
        </div>
        </>
    );
}

export default ServicePage;
