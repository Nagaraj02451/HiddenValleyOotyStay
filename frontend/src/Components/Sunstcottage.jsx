import React, { useEffect } from 'react'
import "../Styles/Ourstays.css"
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import Footer2 from './Footer2'
import { Link } from 'react-router-dom'


const Sunstcottage = ({ addBase, adult , pizza , child , dateone , datetwo,roomR }) => {
    console.log("kjhgju" , pizza.child);
    useEffect(()=>{
  child(pizza.child)
  addBase(pizza.addBase)
  adult(pizza.adult)
  datetwo(pizza.datetwo)
  dateone(pizza.dateone)
  roomR(pizza.roomR)

    },[])
  return (
    <>
      <div className='os1'>
            <div className='osa'>


                 <div className='osbSC'>
                   <div className='osc'>
                      <Navbar2/>
                      <div className='os31'>
                       <div className='os32'>
                        <img src='Img/third6SC.webp'></img>
                       </div>
                     <div className='os33'>Wake up to breathtaking views and unwind in the peaceful embrace of 
                      <br />nature at Sunset Cottage, Hidden Valley Coorg. Designed for those who
                      <br /> seek serenity, this cozy retreat offers modern comforts with a touch of 
                      <br />rustic charm. Whether you’re sipping coffee on the porch or soaking in the 
                      <br />sunset, every moment here is crafted for relaxation and rejuvenation.</div>
                     <div className='os33a'>Wake up to breathtaking views and
                      <br /> unwind in the peaceful embrace of
                      <br /> nature at Sunset Cottage, Hidden 
                      <br />Valley Coorg. Designed for those
                      <br /> who seek serenity, this cozy retreat
                      <br /> offers modern comforts with a touch
                      <br /> of rustic charm. Whether you’re 
                      <br />sipping coffee on the porch or 
                      <br />soaking in the sunset, every moment
                      <br /> here is crafted for relaxation and
                      <br /> rejuvenation.</div>

                     <Link to='/sunsetcottageBooking'><div className='os34'>
                        <button>BOOK NOW</button>
                     </div></Link>
                     </div>

             </div>
                 </div>

                 
            </div>
  

             <div className='os4'>

                   <div className='os41'>
                     <div className='os42'>AMENITIES</div>

                      <div className='os43'>
                         <div className='os44'>
                           <div className='os45'> Authentic Coorgi Cuisine</div>
                           <div className='os45'> Volleyball Court</div>
                           <div className='os45'> Machan for Bird Watching</div>
                           <div className='os45'> River Trek</div>
                           <div className='os45'> Outdoor Barbecue</div>
                           <div className='os45'> Local sight-seeing Assistance</div>
                          
                         </div>
                         <div className='os44'>
                           <div className='os45'> Campfire</div>
                           <div className='os45'> Badminton Court</div>
                           <div className='os45'> Wifi</div>
                           <div className='os45'> Guided Plantation Tour</div>
                           <div className='os45'> Trekking Guides</div>
                         </div>
                      </div>
                   </div>

             </div>

             <div className='os5'>
                <div className='os51'>
                  <div className='os42'>GALLERY</div>
                  <div className='os53'>
                  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id='jhgfuyt' src='Img/new10.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/new11.webp' alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/new12.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/new13.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/new14.webp'  alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                  </div>
                </div>
             </div>

                 
            <div className='os6'>
               <div className='os61'>
                  <div className='os42'>TYPES OF ROOM</div>
                  <div className='os63R'>
                     <div className='os64'>
                        <div className='os65'><img src='Img/third4SC.webp'></img></div>
                        <div className='os66'>Mountain view chalets</div>
                        <div className='os67'>3 Chalets | ₹3500-4000</div>
                     </div>
                     <div className='os64'>
                        <div className='os65'><img src='Img/third44SC.webp'></img></div>
                        <div className='os66'>Suite chalet</div>
                        <div className='os67'>1 Suite | ₹3500-4000</div>
                     </div>
                     {/* <div className='os64'>
                        <div className='os65'><img src='Img/third444SC.webp'></img></div>
                        <div className='os66'>TYPE 3</div>
                        <div className='os67'>Coorg | 3 Rooms | ₹1500-2300</div>
                     </div> */}
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

export default Sunstcottage
