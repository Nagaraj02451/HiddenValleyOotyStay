import React from 'react'
import "../Styles/Ourstays.css"
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import Footer2 from './Footer2'


const Nethra = () => {
  return (
    <>
      <div className='os1'>
            <div className='osa'>


                 <div className='osbN'>
                   <div className='osc'>
                      <Navbar2/>
                      <div className='os31'>
                       <div className='os32'>
                        <img src='Img/third6N.svg'></img>
                       </div>
                     <div className='os33'>Tucked away in a lush coffee plantation, Nethra Hidden Valley offers a
                      <br /> serene escape into nature. Wake up to the aroma of fresh coffee, take a 
                      <br />scenic walk to a hidden waterfall, and unwind in cozy accommodations
                      <br /> with private patios. Perfectly located for both relaxation and 
                      <br />exploration, this is your gateway to the untouched beauty of Coorg. </div>
                     <div className='os33a'>Tucked away in a lush coffee 
                      <br />plantation, Nethra Hidden Valley 
                      <br />offers a serene escape into nature.
                      <br /> Wake up to the aroma of fresh 
                      <br />coffee, take a scenic walk to a 
                      <br />hidden waterfall, and unwind in 
                      <br />cozy accommodations with private
                      <br /> patios. Perfectly located for both
                      <br /> relaxation and exploration, this is 
                      <br />your gateway to the untouched 
                      <br />beauty of Coorg.</div>

                     <a href='nethraBooking'><div className='os34'>
                        <button>BOOK NOW</button>
                     </div></a>
                     </div>

             </div>
                 </div>

                 
            </div>
  

             <div className='os4'>

                   <div className='os41'>
                     <div className='os42'>AMENITIES</div>

                      <div className='os43'>
                         <div className='os44'>
                           <div className='os45'> Bonfire</div>
                           <div className='os45'> Badminton Court</div>
                           <div className='os45'> Guided coffee plantation walk</div>
                           <div className='os45'> Local sight-seeing Assistance</div>
                           {/* <div className='os45'> Common Fireplace</div> */}
                          
                         </div>
                         <div className='os44'>
                           <div className='os45'> Homefood</div>
                           <div className='os45'> Private waterfall Trek</div>
                           <div className='os45'> Barbecue Equipment</div>
                           {/* <div className='os45'> Wi-Fi / internet access / Television</div> */}
                           {/* <div className='os45'> Breakfast / Dinner (On Request and Fixed Menu)</div> */}
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
      <img id='jhgfuyt' src='Img/Nethra4.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/Nethra5.webp' alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/Nethra6.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/Nethra7.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/Nethra1.webp'  alt="..." />
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
                  <div className='os63'>
                     <div className='os64'>
                        <div className='os65'><img src='Img/Nethra1.webp'></img></div>
                        <div className='os66'>Glasshouse</div>
                        <div className='os67'>2 Rooms | ₹5200-6400</div>
                     </div>
                     <div className='os64'>
                        <div className='os65'><img src='Img/Nethra2.webp'></img></div>
                        <div className='os66'>Ground Floor Room</div>
                        <div className='os67'>2 Rooms | ₹2500-3000</div>
                     </div>
                     <div className='os64'>
                        <div className='os65'><img src='Img/Nethra3.webp'></img></div>
                        <div className='os66'>COTTAGE</div>
                        <div className='os67'>1 Cottage | 2 Bedrooms | ₹2500-3000</div>
                     </div>
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

export default Nethra
