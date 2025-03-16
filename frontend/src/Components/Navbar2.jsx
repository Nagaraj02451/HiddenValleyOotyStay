import React, { useState } from 'react'
import '../Styles/Navbar2.css'
import Sidebar from './Sidebar/Sidebar';

const Navbar2 = () => {
    const [isopen, setisopen] = useState(false);
    const toggle = () => {
      setisopen(!isopen);
    };
  return (
    <>
<Sidebar isopen={isopen} toggle={toggle} />

    <div className='nav11'>
        <div className='nav2edit'>
         <a href='site' className='nav11a'>OUR STAYS</a>
         <a href='contact' className='nav11a'>CONTACT US</a>
         <img className='u7y86tg76y' onClick={toggle} src='Img/nav2.svg'></img>

        </div>

        <div className='nav13'>
            <a className='nav13a' href='/'>
            <img  id='dth' src='Img/firstlogo2.svg'></img>
            <img id='tdrh'  src='Img/firstlogo22.svg'></img>
            </a>
        </div>

        <div className='nav12'> 
        <a className='nav12a nav12aa'>
        <img src='Img/nav2.svg'></img>
        </a>
         <a href='property' className='nav11a'>LIST YOUR PROPERTY</a>
         <a href='tel:+9611588968' className='nav1a'>+91 9611588968</a>

       </div>


    </div>
    </>
  )
}

export default Navbar2
