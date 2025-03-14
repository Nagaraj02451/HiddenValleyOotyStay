import React, { useState } from 'react'
import '../Styles/Frontpage1.css'
import Navbar1 from './Navbar1'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from 'react-router-dom'

const Frontpage1 = ({ addBase, adult , pizza , child , dateone , datetwo }) => {
  const bases = ['SUNSET COTTAGE', 'SUNSET VALLEY VILLA', 'RIVERSIDE' , 'NETHRA' , 'TINYHOUSE'];
  const [delivery, setdelivery] = useState("");
//   console.log(delivery , "uiyigf");
const navigate = useNavigate();
  
   const [datefirst, setDate] = useState(new Date());
   const [date1, setDate1] = useState(new Date());
   const [count, setcount] = useState(0);
   const [count1, setcount1] = useState(0);
//   console.log(date1.toString().slice(0,15), date , "uiyigf");


   const increment =()=>{
      setcount(count+1)
      adult(count+1)
      if(count >= 3){
        alert("Only 5 Members allowed")
      }
      }
      const hgcytfuyf =()=>{
         dateone(datefirst.toString().slice(0,15))

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
     const hgfdutydc =()=>{
   
      datetwo(date1.toString().slice(0,15))

      if(delivery === "SUNSET COTTAGE"){
         navigate("/sunsetcottageBooking")
      }else if(delivery === "SUNSET VALLEY VILLA"){
         navigate("/sunsetVillaBooking")
      }else if(delivery === "RIVERSIDE"){
         navigate("/riversideBooking")
      }else if(delivery === "NETHRA"){
         navigate("/nethraBooking")
      }else if(delivery === "TINYHOUSE"){
         navigate("/tinyhouseBooking")
      }

     }
   return (
      <>
         <div className='fr1'>
            <div className='fr2'>

               <Navbar1 />

               <div className='fr3'>
                  <div className='fr4'>
                     <div className='fr4a'>Welcome to <br/>
                     Hidden Valley Stays</div>
                     <a className='fr4c' href='/site'><button className='fr4b'>SEE OUR STAYS</button></a>

                  </div>

                  <div className='fr5'>

                     <div className='ufygu'>
                        <p className='iuyrtf87iyug'>Book your stay with us</p>
                        <select  value={delivery} onChange={(e)=>setdelivery(e.target.value)}>
       


       {bases.map(base => {
         let spanClass = pizza.base === base ? 'active' : '';
         return (
           <option key={base} onClick={() => addBase(base)}>
             <span className={spanClass}>{ base }</span>
           </option>
         )
       })}


       </select>
                        <div className='uytfdu6ty'>
                        <div className='yutdfrt6uy'>
         {/* <div>ugyhf</div> */}
      <span className='uytrfd6u7tyf'></span>
      {/* <input type='text' placeholder='CHECK IN ' /> */}
      <DatePicker id='uytr7iy' placeholderText='CHECK IN' selected={datefirst} onChange={(datefirst) => setDate(datefirst)} />
      {/* <input type='text' placeholder='CHECK OUT' /> */}
   </div>
                        <div className='yutdfrt6uy' onClick={hgcytfuyf}>
         {/* <div>ugyhf</div> */}
      <span className='uytrfd6u7tyf'></span>
      {/* <input type='text' placeholder='CHECK OUT ' /> */}
      <DatePicker id='uytr7iy'  placeholderText='CHECK OUT' selected={date1} onChange={(date) => setDate1(date)} />
      {/* <input type='text' placeholder='CHECK OUT' /> */}
   </div>
                           {/* <input type='text' placeholder='CHECK IN ' />
                           <input type='text' placeholder='CHECK OUT' /> */}
                        </div>
                      <div className='u7tfg67'>
                      <hr />
                      </div>
                        <div className='uy6trf7856'>
                           <p id='uy6trf7856'>ADULTS</p>
                           <div className='iuy7tf7i'>
                              <div onClick={decrement} className='uytrf657fg'>-</div>
                              <div className='jhgfuyv'>{count}</div>
                              <div onClick={increment} className='uytrf657fg'>+</div>
                           </div>

                        </div>
                        <div className='uy6trf7856'>
                           <p id='uy6trf7856'>CHILDERN (0-11)</p>
                           <div className='iuy7tf7i'>
                              <div onClick={decrement1} className='uytrf657fg'>-</div>
                              <div className='jhgfuyv'>{count1}</div>
                              <div onClick={increment1} className='uytrf657fg'>+</div>
                           </div>

                        </div>

                      <div  className='ytrfg7yu' onClick={hgfdutydc}  >  <div className='uytedr756fg'     ><span className='uytrfd6u7tyf1'></span><div   className='iuyfgt6ty'>SEARCH</div></div>
                      </div>
                     </div>




                  </div>

               </div>
            </div>
            <Footer1 />

         </div>



         {/* /mob view */}

         <div className='mf1'>

            <div className='mf2'>

               <div className='mf21'>
                  <div className='mf22'><Navbar1 /></div>
                  <div className='mf23'>Welcome to <br></br> 
                  Hidden Valley Stays </div>
               </div>

            </div>

            <div className='mf3'>
       
            <div className='fr5'>

<div className='ufygu'>
   <p className='iuyrtf87iyug'>Book your stay with us</p>
   <select>
      {/* <option>ALL STAYS
         
      </option> */}
      <option>SUNSET COTTAGE</option>
      <option>SUNSET VALLEY VILLA</option>
      <option>RIVERSIDE</option>
      <option>NETHRA </option>
      <option>TINYHOUSE </option>
   </select>
   <div className='uytfdu6ty'>
  
   <div className='yutdfrt6uy'>
         {/* <div>ugyhf</div> */}
      <span className='uytrfd6u7tyf'></span>
      <DatePicker id='uytr7iy' placeholderText='CHECK IN' selected={datefirst} onChange={(datefirst) => setDate(datefirst)} />

      {/* <input type='text' placeholder='CHECK OUT' /> */}
   </div>
                        <div className='yutdfrt6uy'>
         {/* <div>ugyhf</div> */}
      <span className='uytrfd6u7tyf'></span>
      <DatePicker placeholderText='CHECK OUT' selected={date1} onChange={(date) => setDate1(date)} />

      {/* <input type='text' placeholder='CHECK OUT' /> */}
   </div>
   </div>
   <hr />
   <div className='uy6trf7856'>
      <p id='uy6trf7856'>ADULTS</p>
      <div className='iuy7tf7i'>
         <div onClick={decrement} className='uytrf657fg'>-</div>
         <div>{count}</div>
         <div onClick={increment} className='uytrf657fg'>+</div>
      </div>

   </div>
   <div className='uy6trf7856'>
      <p id='uy6trf7856'>CHILDERN (0-11)</p>
      <div className='iuy7tf7i'>
         <div onClick={decrement1} className='uytrf657fg'>-</div>
         <div>{count1}</div>
         <div onClick={increment1} className='uytrf657fg'>+</div>
      </div>

   </div>

 <a href='site' className='ytrfg7yu'>  <div className='uytedr756fg'><span className='uytrfd6u7tyf1'></span>SEARCH</div>
 </a>
</div>




</div>

            </div>

            <div className='mf4'>
               <Footer2 />
            </div>

         </div>


      </>
   )
}

export default Frontpage1
