import React from 'react'
import "../Styles/Ourstays.css"
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import Footer2 from './Footer2'


const Ourstays = () => {
  return (
    <>
      <div className='os1'>
            <div className='osa'>


                 <div className='osb'>
                   <div className='osc'>
                      <Navbar2/>
                      <div className='os31'>
                       <div className='os32'>
                        <img src='Img/third6.webp'></img>
                       </div>
                     <div className='os33'>Thoughtfully designed for a unique and immersive stay, this compact
                      <br /> retreat offers everything you need to unwind in the heart of nature. 
                      <br/>Perfect for travellers seeking a peaceful getaway, the Tinyhouse lets 
                      <br />you experience the true essence of Coorg - serene landscapes, fresh 
                      <br />mountain air, and cosy living, all in one place.</div>
                     <div className='os33a'>Thoughtfully designed for a unique 
                      <br />and immersive stay, this compact 
                      <br />retreat offers everything you need to
                      <br /> unwind in the heart of nature. Perfect 
                      <br />for travellers seeking a peaceful 
                      <br />getaway, the Tinyhouse lets you
                      <br /> experience the true essence of Coorg 
                      <br />- serene landscapes, fresh mountain 
                      <br />air, and cosy living, all in one place. </div>

                     <a href='tinyhouseBooking'><div className='os34'>
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
                           <div className='os45'> Home-cooked Meals</div>
                           <div className='os45'> Bonfire</div>
                           <div className='os45'> Barbecue Equipment</div>
                           {/* <div className='os45'> Wake-up service</div>
                           <div className='os45'> Common Fireplace</div> */}
                          
                         </div>
                         <div className='os44'>
                           <div className='os45'> WiFi</div>
                           <div className='os45'> Guided Plantation Tour</div>
                           {/* <div className='os45'> Patio</div>
                           <div className='os45'> Wi-Fi / internet access / Television</div>
                           <div className='os45'> Breakfast / Dinner (On Request and Fixed Menu)</div> */}
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
      <img id='jhgfuyt' src='Img/new.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/new1.webp' alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/new2.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/new3.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/new4.webp'  alt="..." />
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
        
                     {/* <img src='Img/third3.svg'></img> */}
                  </div>
                </div>
             </div>

                 
            {/* <div className='os6'>
               <div className='os61'>
                  <div className='os42'>TYPES OF ROOM</div>
                  <div className='os63'>
                     <div className='os64'>
                        <div className='os65'><img src='Img/third4.webp'></img></div>
                        <div className='os66'>TYPE 1</div>
                        <div className='os67'>Coorg | 2 Rooms | ₹1500-2300</div>
                     </div>
                     <div className='os64'>
                        <div className='os65'><img src='Img/third44.webp'></img></div>
                        <div className='os66'>TYPE 2</div>
                        <div className='os67'>Coorg | 3 Rooms | ₹1500-2300</div>
                     </div>
                     <div className='os64'>
                        <div className='os65'><img src='Img/third444.webp'></img></div>
                        <div className='os66'>TYPE 3</div>
                        <div className='os67'>Coorg | 3 Rooms | ₹1500-2300</div>
                     </div>
                  </div>
               </div>
            </div>   */}
   <div className='ourfoot'>

   <Footer2/>

   </div>
      </div>
    </>
  )
}

export default Ourstays
