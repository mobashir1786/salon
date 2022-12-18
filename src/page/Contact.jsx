import React from 'react';
import phone from '../material/phone.png';
import email from '../material/email.png';
import location from '../material/location.png';

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const number = event.target[1].value;
        const email = event.target[2].value;
        const message = event.target[3].value;

        console.log(name, number, email, message);
    }
    return (
        <div className='cont'><span style={{ color: "#105652", font: "normal normal bold 35px/44px Inter", opacity: "1", margin: "10px", borderBottom: "5px solid #FCA738" }}>Contact Me</span><br />
            <div className="contact">
                <div className="contactLeft">
                    <h3 style={{ fontSize: "20px", color: "#105652" }}>Let's Connect</h3>
                    <p>You Can Contact, Complain, send Message or Any Suggestion. <br /> Our Team will contact you Regarding Your Query. <br /> You can take Online Appointments also.</p>
                    <p><img className="mail" src={email} alt='' /> : beautysalon@gmail.com</p>
                    <p ><img className="mail" src={phone} alt='' /> : 9155395918</p>
                    <p><img className="mail" src={location} alt='' /> : Bhagalpur, Bihar 812002</p>
                </div>
                <div className="contactRight">
                    <h3 className="send">Send me a message</h3>
                    <form onSubmit={handleSubmit}>
                        <label >Name</label><br />
                        <input type="text" style={{ width: "280px", borderRadius: "5px", height: "24px", backgroundColor: "#FFFFFF" }} /><br />
                        <label tyle={{ marginTop: "10px" }}>Phone Number</label><br />
                        <input type="number" style={{ width: "280px", borderRadius: "5px", height: "24px", backgroundColor: "#FFFFFF" }} /><br />
                        <label tyle={{ marginTop: "10px" }}>Email address</label><br />
                        <input type="email" style={{ width: "280px", borderRadius: "5px", height: "24px", backgroundColor: "#FFFFFF" }} /><br />
                        <label tyle={{ marginTop: "10px" }}>Message</label><br />
                        <textarea className="textarea" placeholder='Enter your message' style={{ width: "280px", borderRadius: "5px", height: "72px", backgroundColor: "#FFFFFF", border: "2px solid black" }} /><br />
                        <button className="btn btn-warning click" style={{ backgroundColor: "#FCA738", padding: "10px", marginTop: "10px", borderRadius: "10px" }} type="submit" >Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

