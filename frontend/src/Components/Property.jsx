import React, { useState } from 'react'
import Navbar1 from './Navbar1'
import '../Styles/Property.css'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import axios from 'axios'
import { toast } from "react-toastify";


const Property = () => {
   const [name, setname] = useState("");
   const [email, setEmail] = useState("");
   const [surname, setsurname] = useState("");
   const [phone, setphone] = useState("");
   const [property, setproperty] = useState("");
   const [typeofproperty, settypeofproperty] = useState("");
   const [websitelink, setwebsitelink] = useState("");

   const conttactinfo = async () => {
      //  alert("df")
       try {
           if (email) {
               const result = await axios.post("/api/v1/listproperty", {
                   name : name,
                   surname : surname,
                   phone : phone,
                   email: email,
                   property : property,
                   typeofproperty : typeofproperty,
                   websitelink : websitelink
               });
               alert("Your details has been received successfully")

              
           } else {
            alert("Please fill all details")

           }
       } catch (error) {
         if (error.response && error.response.status === 404) {
             toast.error(
                 "The server endpoint was not found. Please contact the administrator.",
                 {
                     position: "bottom-center",
                 }
             );
         } else {
             toast.error(
                 `An error occurred: ${error.message}`,
                 {
                     position: "bottom-center",
                 }
             );
         }
         console.error("Error submitting property details:", error);
     }
   };
  return (
    <>
    <div className='pro1'>
        <div className='pro2'>  
            <Navbar1/>

              <div className='pro3'>
                   <div className='pro31'>
                         <div className='pro32'>List your property with us!</div>
                         <div className='hgfyvutu'>You can fill out this form and one of our personnel will<br /> connect with you at the earliest.</div>
                         <div className='pro33'>
                         <div className='pro34' ><input value={name} onChange={(e) => setname(e.target.value)} placeholder='Name'></input></div>
                         <div className='pro34' ><input value={surname} onChange={(e) => setsurname(e.target.value)} placeholder='Surname'></input></div>
                         <div className='pro34' ><input value={phone} onChange={(e) => setphone(e.target.value)}  placeholder='Phone'></input></div>
                         <div className='pro34' ><input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'></input></div>
                         <div className='pro34' ><input value={property} onChange={(e) => setproperty(e.target.value)} placeholder='Select Your property location'></input></div>
                         <div className='pro34' ><input value={typeofproperty} onChange={(e) => settypeofproperty(e.target.value)}  placeholder='What type of property is it?'></input></div>
                         <div className='pro34' ><input value={websitelink} onChange={(e) => setwebsitelink(e.target.value)} placeholder='Photo/Website link (if any)'></input></div>

                         </div>
<div className='hgfyvutu'>This consent records my voluntary permission to allow 
    <br />Hiddenvalley Stays to gather, record, store, use and provide
    <br /> access to my personal information. *</div>

    <div className='hgfyvutu'><input className='ujhgikv' type="checkbox" />By checking this box, I agree to receive promotional
        <br /> texts/calls from Hiddenvalley Stays and consent to the 
        <br />Privacy Policy.</div>

                         <div onClick={conttactinfo} className='cnt41e'><button>Send Request</button></div>

                   </div>

                   <div className='pro35'>
                   <div className='pro36'><img src='Img/last1.svg'></img></div>

                   </div>

              </div>


        </div>
        <div className='ourfoot'>

       <Footer2/>

      </div>
    </div>
    </>
  )
}

export default Property
