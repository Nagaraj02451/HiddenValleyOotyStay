import React from 'react'
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


const Pages = () => {
  return (
    <>
    <BrowserRouter>
    <ToastContainer theme='dark' />
    
     <Routes>

       <Route path='/navbar1' element={<Navbar1/>}></Route>
       <Route path='/navbar2' element={<Navbar2/>}></Route>
       <Route path='/footer1' element={<Footer1/>}></Route>
       <Route path='/footer2' element={<Footer2/>}></Route>

       <Route path='/' element={<Frontpage1/>}></Route>  
       <Route path='/hinyhouse' element={<Ourstays/>}></Route>
       <Route path='/riverside' element={<Riverside />}></Route>
       <Route path='/sunsetcottage' element={<Sunstcottage />}></Route>
       <Route path='/sunsetvilla' element={<Sunsetvlla />}></Route>
       <Route path='/nethra' element={<Nethra />}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/property' element={<Property/>}></Route>
       <Route path='/booking' element={<Booking/>}></Route>
       <Route path='/tinyhouseBooking' element={<Bprocess/>}></Route>
       <Route path='/riversideBooking' element={<RiversideBooking />}></Route>
       <Route path='/sunsetcottageBooking' element={<SunsetcottageBooking />}></Route>
       <Route path='/sunsetVillaBooking' element={<SubsetVillabooking />}></Route>
       <Route path='/nethraBooking' element={<NethraBooking />}></Route>
       {/* <Route path='/sidebar' element={<Sidebar/>}></Route> */}
       <Route path='/site' element={<Sites />}></Route>
     </Routes>

    </BrowserRouter>
    </>
  )
}

export default Pages