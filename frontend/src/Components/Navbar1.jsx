import React, {useState} from 'react'
import '../Styles/Navbar1.css'
import Sidebar from './Sidebar/Sidebar';

const Navbar1 = () => {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <>

{/* <Sidebar isopen={isopen} toggle={toggle} /> */}
<Sidebar isopen={isopen} toggle={toggle} />

    <div className='nav1'>
        <div className='nav2edit'>
         <a href='site' className='nav1a'>OUR STAYS</a>
         <a href='contact' className='nav1a'>CONTACT US</a>
       
            <img className='u7y86tg76y' onClick={toggle} src='Img/nav1.svg'></img>

        </div>

        <div className='nav3'>
            <a className='nav3a' href='/'>
            <img  id='dth' src='Img/firstlogo1.svg'></img>
            <img id='tdrh'  src='Img/firstlogo11.svg'></img>
            </a>  
        </div>
    
        <div className='nav2'> 
      
        {/* <img  onClick={toggle} src='Img/nav1.svg'></img> */}
   
         <a href='property' className='nav1a'>LIST YOUR PROPERTY</a>
         <a href='tel:+9611588968' className='nav1a'>+91 9611588968</a>
       </div>


    </div>
    </>
  )
}

export default Navbar1
