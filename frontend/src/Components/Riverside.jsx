import React from 'react'
import "../Styles/Ourstays.css"
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import Footer2 from './Footer2'


const Riverside = () => {
  return (
    <>
      <div className='os1'>
            <div className='osa'>


                 <div className='osbr'>
                   <div className='osc'>
                      <Navbar2/>
                      <div className='os31'>
                       <div className='os32'>
                        <img src='Img/thirdrrr.webp'></img>
                       </div>
                     <div className='os33'>Nestled along a tranquil riverside, this homestay offers a peaceful 
                      <br />escape where the soothing sounds of flowing water set the perfect 
                      <br />backdrop for relaxation. Immerse yourself in nature, unwind in the
                      <br /> serene surroundings, and experience the untouched beauty of Coorg 
                      <br />from the comfort of your stay.</div>
                     <div className='os33a'>Nestled along a tranquil riverside, 
                      <br />this homestay offers a peaceful escape
                      <br /> where the soothing sounds of 
                      <br />flowing water set the perfect
                      <br /> backdrop for relaxation. Immerse
                      <br /> yourself in nature, unwind in the 
                      <br />serene surroundings, and experience 
                      <br />the untouched beauty of Coorg from
                      <br /> the comfort of your stay.</div>

                     <a href='RiversideBooking'><div className='os34'>
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
                           <div className='os45'> Authentic Homemade Coorgi Cuisine</div>
                           <div className='os45'> Guided Trek to private waterfall</div>
                           <div className='os45'> Wifi</div>
                           <div className='os45'> Jeep Safari</div>
                           {/* <div className='os45'> Common Fireplace</div> */}
                          
                         </div>
                         <div className='os44'>
                           <div className='os45'> Bonfire View</div>
                           <div className='os45'> Guided Coffee Plantation Tour</div>
                           <div className='os45'> Indoor and Outdoor Games</div>
                           <div className='os45'> Local sight-seeing Assistance</div>
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
      <img id='jhgfuyt' src='Img/new5.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/new6.webp' alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/new7.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/new8.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/new9.webp'  alt="..." />
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
                        <div className='os65'><img src='Img/third4r1.webp'></img></div>
                        <div className='os66'>Farmhouse</div>
                        <div className='os67'>3 Rooms | 1 Dorm Room | ₹4800-7200</div>
                     </div>
                     <div className='os64'>
                        <div className='os65'><img src='Img/third44r2.webp'></img></div>
                        <div className='os66'>Treehouse</div>
                        <div className='os67'>2 Rooms | ₹3000-7000</div>
                     </div>
                     {/* <div className='os64'>
                        <div className='os65'><img src='Img/third444r3.webp'></img></div>
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

export default Riverside
