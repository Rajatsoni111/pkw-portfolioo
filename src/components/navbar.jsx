import React, { useEffect, useState, useRef } from 'react'
import './stylesheet/navbar.css'
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [displayMenu, setDisplayMenu] = useState('none')

    const onhandleClick = (event)=>{
       
        if (displayMenu == 'none' )  setDisplayMenu('flex')
        //  else if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        //     setDisplayMenu('none');
        //   }
            else setDisplayMenu('none')
    }

    // const [isNavbarVisible, setNavbarVisible] = useState(true); // State to control navbar visibility
  const navbarRef = useRef(null); // Ref to the navbar element

  // Effect to add the global click event listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the navbar
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setDisplayMenu('none'); // Hide navbar if clicked outside
      }
    };
    // Attach the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div class="outer-nav">
  <header>
    <div class="outer-header">
      <div class="open-menu" onClick={onhandleClick}>
        <AiOutlineMenu/>
            </div>
      <img src="../png-02.png" alt="Illustrator box full logo" width="300" px id="logo" />
      <div id="hire"><a href="#" id="t">Hire me</a></div>
    </div>
  </header>
  <nav>
  <div id="navbar-outer-div" className='navbar-1'>
      <div className="close-mark" onClick={onhandleClick}>
       <IoMdClose/>
        </div>
      <Link className='links' to='/'> <a href='' className="navbar">Home</a></Link>
      <Link className='links' to='/review'> <a href='' className="navbar">Reviews</a></Link>
      <Link className='links' to='/service'> <a href='' className="navbar">Service</a></Link>
      <Link className='links' to='/about'> <a href='' className="navbar">About</a></Link>

      <a href="#" className="navbar">Contact</a>
      <a href="#" className="navbar">Links</a>
    </div>
    <div id="navbar-outer-div"  style={{display: `${displayMenu}`}} ref={navbarRef}>
      <div className="close-mark" onClick={onhandleClick}>
       <IoMdClose/>
        </div>
        <Link className='links' to='/'> <a href='' className="navbar">Home</a></Link>
      <Link className='links' to='/review'> <a href='' className="navbar">Reviews</a></Link>
      <Link className='links' to='/service'> <a href='' className="navbar">Service</a></Link>
      <Link className='links' to='/about'> <a href='' className="navbar">About</a></Link>
      <a href="#" className="navbar">Contact</a>
      <a href="#" className="navbar">Links</a>
    </div>
  </nav>
</div>
  )
}

export default Navbar
