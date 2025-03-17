import React, { useState } from 'react'
import '../Styles/Contact.css'
import Navbar1 from './Navbar1'
import axios from "axios"
import Footer2 from './Footer2'
import { ToastContainer, toast } from "react-toastify";



const Contact = () => {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [surname, setsurname] = useState("");
    const [phone, setphone] = useState("");
    const [message, setmessage] = useState("");

    const conttactinfo = async () => {
        // alert("df")
        try {
            if (email) {
                 // console.log(result , "iuhjb");
                alert("Contact details has been received successfully. Our team will contact you soon!!!")

                const result = await axios.post("/api/v1/contact", {
                    name : name,
                    surname : surname,
                    phone : phone,
                    email: email,
                    message : message
                });
               
              
            } else {
                alert("Please fill all details")

            }
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <>

            <div className='cnt1'>
                
                <div className='cnt2'>

                    <Navbar1 />

                    <div className='cnt3'>
                        <div className='newcontentsupport'>
                        {/* <div className='cnt31' >Semper vitae sit pretium nisl</div> */}
                        <div className='cnt32'>CONTACT US</div>

                        <div className='jyfu6ty'>
                           <a href="tel:+9611588968" > <div className='jhcgvkuy'><div > <span className='hjcgg'>Call :</span> </div> +91 9611588968/ +91 6362757985</div></a>
                           <div>
                           <a href="mailto:hello@hiddenvalleystays.com" ><div className='jhcgvkuy'>
                           <div><span className='hjcgg'>For Enquiry :</span>  </div> hello@hiddenvalleystays.com</div></a>
                           <a href="mailto:reservation@hiddenvalleystays.com" ><div className='jhcgvkuy'>
                           <div><span className='hjcgg'>For Reservations: </span>  </div>reservation@hiddenvalleystays.com</div></a>
                           </div>
                            <a><div className='jhcgvkuy'><div><span className='hjcgg'>Address :</span> </div> Coorg, Karnataka</div></a>
                        </div>
                        </div>

                     



                        <div className='cnt4'>
                            <div className='cnt41'>
                                <div className='cnt41a'>Get in touch!</div>
                                <div className='cnt41b'>Alternatively, you can fill out this form and we will get back
                                    <br /> to you at the earliest.</div>
                                <div className='cnt41bb'>Alternatively, you can fill out this form and we will get back
                                <br /> to you at the earliest.</div>

                                <div className='cnt41c' >
                                    <div className='cnt41d' ><input type='text' value={name} onChange={(e) => setname(e.target.value)} placeholder='Name'></input></div>
                                    <div className='cnt41d'><input type='text' value={surname} onChange={(e) => setsurname(e.target.value)} placeholder='Surname'></input></div>
                                    <div className='cnt41d'><input  type='text' value={phone} onChange={(e) => setphone(e.target.value)} placeholder='Phone'></input></div>
                                    <div className='cnt41d'><input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'></input></div>
                                    <div className='cnt41d'><textarea value={message} onChange={(e) => setmessage(e.target.value)} type='text' placeholder='Message' rows="8" cols=""></textarea></div>


                                </div>
                                <div className='hgfyvutu'>This consent records my voluntary permission to allow 
    <br />Hiddenvalley Stays to gather, record, store, use and provide
    <br /> access to my personal information. *</div>

    <div className='hgfyvutu'><input className='ujhgikv' type="checkbox" />By checking this box, I agree to receive promotional
        <br /> texts/calls from Hiddenvalley Stays and consent to the 
        <br />Privacy Policy.</div>
                                <div className='cnt41e' onClick={conttactinfo}><button>Send now</button></div>
                            </div>
                            <div className='cnt42'>
                                <div className='cnt42a'>Follow us on</div>
                                <div className='cnt42b'><img src='Img/insta1.svg'></img></div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='ourfoot'>

                    <Footer2 />

                </div>
            </div>
        </>
    )
}

export default Contact
