import React , { useState }  from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar1 from './Components/Navbar1';
import Frontpage1 from './Components/Frontpage1';
import Footer1 from './Components/Footer1';
import "../src/App.css"
import Ourstays from './Components/Ourstays';
import Navbar2 from './Components/Navbar2';
import Contact from './Components/Contact';
import Footer2 from './Components/Footer2';
import Property from './Components/Property';
import Booking from './Components/Booking';
import Bprocess from './Components/Bprocess';
import { ToastContainer } from 'react-toastify';
import Sites from './Components/Sites';
import Riverside from './Components/Riverside';
import Sunstcottage from './Components/Sunstcottage';
import Sunsetvlla from './Components/Sunsetvlla';
import Nethra from './Components/Nethra';
import RiversideBooking from './Components/RiversideBooking';
import SunsetcottageBooking from './Components/SunsetcottageBooking';
import SubsetVillabooking from './Components/SubsetVillabooking';
import NethraBooking from './Components/NethraBooking';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import Refund from './Components/Refund';


const Pages = () => {
  const [pizza, setPizza] = useState({ base: "" , adult : "", child : "" , dateone : "" , datetwo : "" , stay :"" , roomR:"" , taxR : "", totalR :"" });

  console.log(pizza, "Collected base");

  const addBase = (base ) => {
    setPizza({ ...pizza, base })
  }

  const addadult = (adult) => {
    setPizza({ ...pizza, adult })
  }

  const addchild = (child) => {
    setPizza({ ...pizza, child })
  }
  const firstdate = (dateone) => {
    setPizza({ ...pizza, dateone })
  }
  const seconddatedate = (datetwo) => {
    setPizza({ ...pizza, datetwo })
  }
  const stay = (stay) => {
    setPizza({ ...pizza, stay })
  }
  const roomR = (roomR) => {
    setPizza({ ...pizza, roomR })
  }
  const taxR = (taxR) => {
    setPizza({ ...pizza, taxR })
  }
  const totalR = (totalR) => {
    setPizza({ ...pizza, totalR })
  }


  return (
    <>
    <BrowserRouter>
    <ToastContainer theme='dark' />

      
    
     <Routes>

       <Route path='/navbar1' element={<Navbar1/>}></Route>
       <Route path='/navbar2' element={<Navbar2/>}></Route>
       <Route path='/footer1' element={<Footer1/>}></Route>
       <Route path='/footer2' element={<Footer2/>}></Route>

       <Route path='/' element={<Frontpage1  addBase={addBase} pizza={pizza} adult ={addadult} child ={addchild}  dateone={firstdate} datetwo={seconddatedate} />}></Route>  
       <Route path='/hinyhouse' element={<Ourstays roomR={roomR} taxR={taxR} totalR={totalR} stay={stay} addBase={addBase} pizza={pizza} adult ={addadult} child ={addchild}  dateone={firstdate} datetwo={seconddatedate} />}></Route>
       <Route path='/riverside' element={<Riverside roomR={roomR} taxR={taxR} totalR={totalR} stay={stay} addBase={addBase} pizza={pizza} adult ={addadult} child ={addchild}  dateone={firstdate} datetwo={seconddatedate} />}></Route>
       <Route path='/sunsetcottage' element={<Sunstcottage roomR={roomR} taxR={taxR} totalR={totalR} stay={stay} addBase={addBase} pizza={pizza} adult ={addadult} child ={addchild}  dateone={firstdate} datetwo={seconddatedate} />}></Route>
       <Route path='/sunsetvilla' element={<Sunsetvlla roomR={roomR} taxR={taxR} totalR={totalR} stay={stay} addBase={addBase} pizza={pizza} adult ={addadult} child ={addchild}  dateone={firstdate} datetwo={seconddatedate} />}></Route>
       <Route path='/nethra' element={<Nethra stay={stay} addBase={addBase} pizza={pizza} adult ={addadult} child ={addchild}  dateone={firstdate} datetwo={seconddatedate} />}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/property' element={<Property/>}></Route>
       <Route path='/booking' element={<Booking pizza={pizza} />}></Route>
       <Route path='/tinyhouseBooking' element={<Bprocess roomR={roomR} taxR={taxR} totalR={totalR} stay={stay} addBase={addBase} pizza={pizza} adult ={addadult} child ={addchild}  dateone={firstdate} datetwo={seconddatedate} />}></Route>
       <Route path='/riversideBooking' element={<RiversideBooking roomR={roomR} taxR={taxR} totalR={totalR} stay={stay} addBase={addBase} pizza={pizza} adult ={addadult} child ={addchild}  dateone={firstdate} datetwo={seconddatedate} />}></Route>
       <Route path='/sunsetcottageBooking' element={<SunsetcottageBooking  roomR={roomR} taxR={taxR} totalR={totalR} stay={stay} addBase={addBase} pizza={pizza} adult ={addadult} child ={addchild}  dateone={firstdate} datetwo={seconddatedate} />}></Route>
       <Route path='/sunsetVillaBooking' element={<SubsetVillabooking roomR={roomR} taxR={taxR} totalR={totalR} stay={stay} addBase={addBase} pizza={pizza} adult ={addadult} child ={addchild}  dateone={firstdate} datetwo={seconddatedate}  />}></Route>
       <Route path='/nethraBooking' element={<NethraBooking roomR={roomR} taxR={taxR} totalR={totalR} stay={stay} addBase={addBase} pizza={pizza} adult ={addadult} child ={addchild}  dateone={firstdate} datetwo={seconddatedate} />}></Route>
       <Route path='/privacyPolicy' element={<Privacy />}></Route>
       <Route path='/termsAndConditions' element={<Terms />}></Route>
       <Route path='/refundPolicy' element={<Refund />}></Route>
       {/* <Route path='/sidebar' element={<Sidebar/>}></Route> */}
       <Route path='/site' element={<Sites />}></Route>
     </Routes>

    </BrowserRouter>
    </>
  )
}

export default Pages
