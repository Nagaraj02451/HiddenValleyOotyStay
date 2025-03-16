import React, { useEffect } from 'react'
import "../Styles/Ourstays.css"
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import Footer2 from './Footer2'
import { Link } from 'react-router-dom'


const Sunsetvlla = ({ addBase, adult , pizza , child , dateone , datetwo , roomR}) => {
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


                 <div className='osbSV'>
                   <div className='osc'>
                      <Navbar2/>
                      <div className='os31'>
                       <div className='os32'>
                        <img src='Img/third6SV.webp'></img>
                       </div>
                     <div className='os33'>Sunset Villa offers breathtaking views of forested valleys and misty 
                      <br />mountains. With spacious, elegantly designed rooms and cozy common 
                      <br />areas, this boutique retreat is perfect for those seeking tranquility 
                      <br />and comfort. Explore hidden streams, savor authentic Coorg cuisine,
                      <br /> and immerse yourself in nature’s beauty—all from the heart of South Coorg.</div>
                     <div className='os33a'>Sunset Villa offers breathtaking views 
                      <br />of forested valleys and misty
                      <br /> mountains. With spacious, elegantly 
                      <br />designed rooms and cozy common 
                      <br />areas, this boutique retreat is perfect
                      <br /> for those seeking tranquility and 
                      <br />comfort. Explore hidden streams, 
                      <br />savor authentic Coorg cuisine, and
                      <br /> immerse yourself in nature’s beauty—all
                      <br /> from the heart of South Coorg.</div>

                     <Link to='/sunsetVillaBooking'><div className='os34'>
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
      <img id='jhgfuyt' src='Img/new15.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/new16.webp' alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/new17.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/new18.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/new19.webp'  alt="..." />
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
                        <div className='os65'><img src='Img/third4SV.webp'></img></div>
                        <div className='os66'>TYPE 1</div>
                        <div className='os67'>4 Rooms | Ground Floor | ₹3500-4000</div>
                     </div>
                     <div className='os64'>
                        <div className='os65'><img src='Img/third44SV.webp'></img></div>
                        <div className='os66'>TYPE 2</div>
                        <div className='os67'>4 Rooms | First Floor | ₹3500-4000</div>
                     </div>
                     {/* <div className='os64'>
                        <div className='os65'><img src='Img/third444SV.webp'></img></div>
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

export default Sunsetvlla
