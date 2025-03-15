import React, { useRef, useState } from 'react'
import'../Styles/Bprocess.css'
import Navbar1 from './Navbar1'
import Footer2 from './Footer2'
import { useEffect } from 'react'
import { Link ,useNavigate } from 'react-router-dom'

const SubsetVillabooking = ({addBase, adult , pizza , child , dateone , datetwo  , stay , roomR , taxR , totalR}) => {
      const searchdfghn = useRef();
    const navigate = useNavigate();
    const [count, setcount] = useState(0);
     const [count1, setcount1] = useState(0);
   const [room, setroom] = useState(0);
   const [tax, settax] = useState(0);
   const [total, settotal] = useState(0);
   const [room1, setroom1] = useState(6000);
   const increment =()=>{
    setcount(count+1)
    adult(count+1)
    if(count >= 3){
      alert("Only 5 Members allowed")
    }
  
    }
  
    const decrement =()=>{
      setcount(count-1)
      adult(count-1)
      if(count === 0){
         setcount(0)
         alert("Select alteast one")
       }
    }
 const increment1 =()=>{
  setcount1(count1+1)
      child(count1+1)
      if(count1 >= 3){
        alert("Only 5 Members allowed")
      }
    }
    
    const decrement1 =()=>{
   
      setcount1(count1-1)
      child(count1+1)
      if(count1 === 0){
         setcount1(0)
         alert("Select alteast one")
       }
   
    }
    const firstroom =()=>{
      searchdfghn.current.classList.add("jhuyiuytg67y")
      setroom1("Type 1")
        setroom(3500)
        settax(500)
        settotal(4000)
        stay("Type 1")
    }
    const secondroom =()=>{
      searchdfghn.current.classList.add("jhuyiuytg67y")
      setroom1("Type 2")
        setroom(3500)
        settax(1200)
        settotal(4000)
        stay("Type 2")
    }
     const jghftuycv = ()=>{
          navigate('/booking',{state:{room:room,tax:tax , total:total}});
          // console.log(room , tax , total , "iuyfygb");
         }
    
           useEffect(()=>{
          child(pizza.child)
          addBase(pizza.addBase)
          adult(pizza.adult)
          datetwo(pizza.datetwo)
          dateone(pizza.dateone)
          stay(pizza.stay)
         
          console.log("kjhgju" , pizza.child);
    
          
            },[])
  return (
    <>
    <div className='book1'>
     <div className='book11'>
      <Navbar1/>

        <div className='book2'>  
           <div  className='book21'><div  className='book22'>Select Your Room</div></div>

           <div className='bpro3'>
             
             <div className='bpro4'>
                      <div className='bpro5'>
                        
                           {/* <div className='bpro51'><img src='Img/bpr1.svg'></img></div> */}
                           <div className=''>
                                <div className='gfctyhgc'>
                              <div>
                              <div className='bpro52a'>Type 1</div>
                              <div className='bpro52b'>3 Chalets | 2 bedrooms per chalets </div>
                              </div>
                              <div className='uytghfyvj'>
                            <div>
                            <div className='bpro52g'>Starting From 3500</div>
                            <div className='bpro52b'>Per night | Excluding Taxes & Fees</div>
                            </div>

                              </div>
                                </div>                                                                                                                                                         
                               {/* <div className='bpro52a'>2 Bedroom Chalet</div>
                               <div className='bpro52b'>Sleeps 2 | 100m2</div>
                               <div className='bpro52c'>Explore our array of thoughtfully designed rooms, each tailored to offer comfort and a touch of luxury, whether you're traveling with family, your loved one, or for business.</div>
                               <div className='bpro52d'>Room details</div> */}
                               {/* <hr className='bprohr1'></hr> */}
                             
                                   {/* <div className='bpro52f'>
                                      <div className='bpro52g'>Rupees 5000 per night</div>
                                      <div className='bpro52h'>Excluding Taxes & Fees</div>
                                   </div> */}
                              <hr className='bprohr1'></hr> 

                                   <div className='bpro5i'>
                                    <div></div>
                                    <button onClick={firstroom}>Select</button>
                                   </div>
                             
                           </div>
                        
                      </div>
                      <div className='bpro5'>
                        
                           {/* <div className='bpro51'><img src='Img/bpr1.svg'></img></div> */}
                           <div className=''>
                                <div className='gfctyhgc'>
                              <div>
                              <div className='bpro52a'>Type 2</div>
                              <div className='bpro52b'>1 Chalets | 1 Living Room | 2 Bedrooms </div>
                              </div>
                              <div className='uytghfyvj'>
                            <div>
                            <div className='bpro52g'>Starting From 3500</div>
                            <div className='bpro52b'>Per night | Excluding Taxes & Fees</div>
                            </div>

                              </div>
                                </div>                                                                                                                                                         
                               {/* <div className='bpro52a'>2 Bedroom Chalet</div>
                               <div className='bpro52b'>Sleeps 2 | 100m2</div>
                               <div className='bpro52c'>Explore our array of thoughtfully designed rooms, each tailored to offer comfort and a touch of luxury, whether you're traveling with family, your loved one, or for business.</div>
                               <div className='bpro52d'>Room details</div> */}
                               {/* <hr className='bprohr1'></hr> */}
                             
                                   {/* <div className='bpro52f'>
                                      <div className='bpro52g'>Rupees 5000 per night</div>
                                      <div className='bpro52h'>Excluding Taxes & Fees</div>
                                   </div> */}
                              <hr className='bprohr1'></hr> 

                                   <div className='bpro5i'>
                                    <div></div>
                                    <button onClick={secondroom}>Select</button>
                                   </div>
                             
                           </div>
                        
                      </div>
               
             

                      {/* <div className='bpro5'>
                           <div className='bpro51'><img src='Img/bpro1.svg'></img></div>
                           <div className='bpro52'>
                               <div className='bpro52a'>King Room with Forest View</div>
                               <div className='bpro52b'>Sleeps 2 | 100m2</div>
                               <div className='bpro52c'>Explore our array of thoughtfully designed rooms, each tailored to offer comfort and a touch of luxury, whether you're traveling with family, your loved one, or for business.</div>
                               <div className='bpro52d'>Room details</div>
                               <hr className='bprohr1'></hr>
                               <div className='bpro52e'>
                                   <div className='bpro52f'>
                                      <div className='bpro52g'>Rupees 6000 per night</div>
                                      <div className='bpro52h'>Excluding Taxes & Fees</div>
                                   </div>
                                   <div className='bpro5i'>
                                    <button onClick={secondroom}>Select</button>
                                   </div>
                               </div>
                           </div>
                           
                      </div> */}


             </div>

             <div className='bpro4a'>
                    <div className='book8'>
                    <div className='book81'>Your Stay</div>
                    <div className='book82'><div className='book83'>Date:</div><div className='book84'> {pizza.dateone} - {pizza.datetwo}</div></div>
                     <div className='book82'><div className='book83'>Guests: </div><div className='book84'><span className='uytfdr5rtfdyt' onClick={decrement}>-</span>{pizza.adult} Adults <span className='uytfdr5rtfdyt' onClick={increment}>+</span > - <span onClick={decrement1} className='uytfdr5rtfdyt'>-</span>{pizza.child} Child <span className='uytfdr5rtfdyt' onClick={increment1}>+</span></div></div>
                     <div className='book82'><div className='book83'>Stay:</div><div className='book84'>Sunset Villa</div></div>
                     {/* <div className='book82'><div className='book83'>Selected Room:</div><div className='book84'>King Room with Forest View</div></div> */}
                     <div className='book82'><div className='book83'>Duration of the Stay: </div><div className='book84'> 1 Night</div></div>
                    
                     <div className='book85'>  
                        <div className='book86'><div className='book86a'><img src='Img/book2.svg'></img></div><div className='book86b'>Add a Room</div></div>
                        <hr className='bookhr1'></hr>
                        <div className='book87'><div className='book87a'>Room's Charge</div><div className='book87b'>{room}</div></div>
                        <div className='book87 book871'><div className='book87a'>Taxes & GST</div><div className='book87b'>{tax}</div></div>
                        <hr className='bookhr1'></hr>
                        <div className='book88'><div className='book88a'>TOTAL</div><div className='book88b'>{total}</div></div>
                    </div>
                


                    </div>

                         
                    <div className='book9' ref={searchdfghn}>
                        <button onClick={jghftuycv} className='book91'>Book Now</button>
                   </div>
                     
                </div>

           </div>

       </div>

    </div>


    <div>

<Footer2/>

</div>
   </div>
    </>
)
}

export default SubsetVillabooking
