import React, { useEffect } from 'react'
import "../Styles/Ourstays.css"
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import Footer2 from './Footer2'
import { Link } from 'react-router-dom'


const Venam = ({ addBase, adult  ,pizza, child , dateone , datetwo  , roomR}) => {
    // console.log("kjhgju" );
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


                 <div className='osV'>
                   <div className='osc'>
                      <Navbar2/>
                      <div className='os31'>
                       <div className='os32'>
                        <img src='Img/venam.webp'></img>
                       </div>
                     <div className='os33'>our newest luxury villa retreat on the serene outskirts of Madikeri.
                      <br />Designed with stunning architecture and tasteful décor, Vanam blends 
                      <br/> elegance with comfort in the heart of nature. This spacious villa features
                      <br />four well-furnished bedrooms for restful stays, two cozy attics ideal
                      <br />for reading or lounging, and two inviting living areas complete with
                      <br /> plush sofas and relaxing swings. Every room opens onto a balcony, 
                      <br />  filling the home with natural light, fresh air, and panoramic views of the 
                      <br />surrounding hills and forests.
                   
                      </div>
                     <div className='os33a'>our newest luxury villa retreat on
                      <br />the serene outskirts of Madikeri.
                      <br />Designed with stunning
                      <br /> architecture and tasteful décor,
                      <br />Vanam blends elegance with
                      <br />comfort in the heart of nature.
                      <br /> This spacious villa features four 
                      <br />well-furnished bedrooms for
                      <br />restful stays, two cozy attics ideal
                      <br />for reading or lounging, and two
                      <br />inviting living areas complete with
                      <br />plush sofas and relaxing swings.
                      <br />Every room opens onto a balcony,
                      <br />filling the home with natural
                      <br />light, fresh air, and panoramic
                      <br />views of the surrounding hills and 
                      <br />forests 
                      
                      </div>

                     <Link to='/venamBooking'><div className='os34'>
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
                           {/* <div className='os45'> Home-cooked Meals</div> */}
                           <div className='os45'> Bonfire</div>
                           <div className='os45'> Dedicated Butler Services</div>
                           {/* <div className='os45'> Wake-up service</div>
                           <div className='os45'> Common Fireplace</div> */}
                          
                         </div>
                         <div className='os44'>
                           <div className='os45'> Fully Equipped Kitchen</div>
                           {/* <div className='os45'> Guided Plantation Tour</div> */}
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
      <img id='jhgfuyt' src='Img/venam1.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/venam2.webp' alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/venam3.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/venam4.webp'  alt="..." />
    </div>
    <div class="carousel-item">
      <img id='jhgfuyt' src='Img/venam5.webp'  alt="..." />
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

export default Venam
