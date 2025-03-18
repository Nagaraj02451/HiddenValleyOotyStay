import React, { useEffect, useRef, useState } from 'react'
import "../Styles/Booking.css"
import Navbar2 from './Navbar2'
import Navbar1 from './Navbar1'
import Footer2 from './Footer2'
import axios from "axios"
import {useLocation, useNavigate ,Link} from 'react-router-dom'

const Booking = ({pizza}) => {
             const hidden = useRef();
             console.log(pizza.datetwo , "uggyft");
             
    
      const location = useLocation();
      const[room , setroom] = useState("")
      const[tax , settax] = useState("")
      const[total , settotal] = useState("")
      const[last , setlast] = useState("")
      const[per , setper] = useState("")
      const[email , setemail] = useState("")
      const[phone , setphone] = useState("")
        const [base, setbase] = useState("");
      
      if(per !== "" && email !== "" && phone !== ""){
        hidden.current.classList.add("dsrhtr")
           
      }
      const bookingdatas = async () => {
        // alert("df")
        try {
            if (email) {
                alert("Booking details has been received successfully. Our team will contact you soon!!!")

                const result = await axios.post("/api/v1/booking", {
                    name : per,
                    email: email,
                    phone : phone,
                    room:room,
                    tax:tax,
                    total:total,
                    date : pizza.dateone,
                    date2 :pizza.datetwo,
                    adult:pizza.adult,
                    child:pizza.child,
                    stay:pizza.base,
                    selectedroom:pizza.stay,

                    
                });
                alert("Your details has been received successfully")
              
            } else {
                alert("Please fill all details")

            }
        } catch (error) {
            console.log(error.message);
        }
    };
    
   useEffect(()=>{
    if (location.state !== null) {
        // alert("hjb")
        setroom(location.state.room)
        settax(location.state.tax)
        settotal(location.state.total)
        setlast(location.state.last)
        setbase(location.state.base)
      }
   },[])
  return (
   <>
   <div className='book1'>
    <div className='book11'>
    <Navbar1/>

        <div className='book2'>  
            <div  className='book21'><img src='Img/book1.svg' ></img><div  className='book22'>Room Details</div></div>

            <div  className='book3'>
                <div  className='book4'>
                    <div  className='book41'>Guest Information</div>

                    <div  className='book42'>
                        <div  className='book43'><input value={per} onChange={(e) => setper(e.target.value)}  placeholder='Name'></input></div>
                        <div  className='book44'>
                            <div  className='book43'><input value={email} onChange={(e) => setemail(e.target.value)}  placeholder='Email'></input></div>
                            <div  className='book44a'>This is the email we will send your confirmation to</div>
                        </div>
                        <div  className='book43'><input value={phone} onChange={(e) => setphone(e.target.value)} placeholder='Phone'></input></div>

                    </div>

                    <div className='book5'>
                        <div className='book51'>Polices :</div>
                        <div className='book52'>
                             <div className='book53'>
                              <div className='book54'>Check-In</div>
                              <div className='book55'>After 12:00 pm</div>
                             </div>
                             <div className='book53a'>
                              <div className='book54'>Check-out</div>
                              <div className='book55'>Before 12:00 pm</div>
                            </div>

                        </div>
                    </div>


                    <div className='book6'>
                         <div className='book61'>Cancel Policy</div>
                         <div className='book62'>If you require to  cancel or amend a reservation more than 7 days prior to arrival, the deposit will be refunded; less than 7 days prior to arrival or in case of No-Show, the full amount of the stay will be charged as cancellation fees. </div>
                    </div>

                    <div className='book6 book6a'>
                         <div className='book61'>Terms & Condition</div>
                         <div className='book62'>If you require to cancel or amend a reservation more than 7 days prior to arrival, the deposit will be refunded; less than 7 days prior to arrival or in case of No-Show, the full amount of the stay will be charged as cancellation fees. </div>
                    </div>




                </div>

                <div className='book7'>
                    <div className='book8'>
                    <div className='book81'>Your Stay</div>
                    <div className='book82'><div className='book83'>Date:</div><div className='book84'> {pizza.dateone} - {pizza.datetwo}</div></div>
                     <div className='book82'><div className='book83'>Guests: </div><div className='book84'>{pizza.adult} Adults - {pizza.child} Child</div></div>
                     <div className='book82'><div className='book83'>Stay:</div><div className='book84'> {pizza.roomR > 0 ? pizza.base : base}</div></div>
                     <div className='book82'><div className='book83'>Selected Room:</div><div className='book84'>{pizza.stay}</div></div>
                     <div className='book82'><div className='book83'>Duration of the Stay: </div><div className='book84'> {last} Night</div></div>
                    
                     <div className='book85'>  
                        {/* <div className='book86'><div className='book86a'><img src='Img/book2.svg'></img></div><div className='book86b'>Add a Room</div></div> */}
                        <hr className='bookhr1'></hr>
                        <div className='book87'><div className='book87a'>Room's Charge</div><div className='book87b'>{room}</div></div>
                        <div className='book87 book871'><div className='book87a'>Taxes & GST</div><div className='book87b'>{tax}</div></div>
                        <hr className='bookhr1'></hr>
                        <div className='book88'><div className='book88a'>TOTAL</div><div className='book88b'>{total}</div></div>
                    </div>
                


                    </div>

                         
                  <div className='book9' ref={hidden}>
                        <button onClick={bookingdatas} className='book91'>Book Now</button>
                   </div>
                     
                </div>

            </div>

        </div>
    

    </div>
  <div className='iuytrgioh'>
  <Footer2 />
  </div>
   </div>
   </>
  )
}

export default Booking
