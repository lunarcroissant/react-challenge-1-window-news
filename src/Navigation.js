import React, { useState } from 'react';
import menuIcon from './static/Menuicon.svg';
// import closeIcon from './static/CloseIcon.svg';
// import './header.css';
// import { Link } from 'react-router-dom';
import './MobileNavMotion.js';
import './header.css';
import './main.css';
import Search from './static/search.svg';
// import { SideBarData } from './SideBarData';



function Navigation() {

  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (

    <div>

      <nav className='header__mobileNavToggle'>
        <img src={menuIcon} alt={menuIcon} onClick={showSideBar} ></img>
      </nav>

      <nav className={sideBar ? 'header__mobileNav--active' : 'header__mobileNav'}>
        <ul className='header__mobileNavList'>
          <li className='header__mobileNavItem activeColur'>Latest News</li>
          <li className='header__mobileNavItem activeColur'>About</li>
          <li className='header__mobileNavItem activeColur'>Contact</li>
          <li className='sectionDivider'></li>
          <li className='header__mobileNavItem'><input className='input--underlined' placeholder='Search news' /></li>
          <li className='header__mobileNavItem'><button className='button--primary'>Sign In</button></li>
          <li className='sectionDivider'></li>
          <li className='header__mobileNavItem' onClick={showSideBar}>Close</li>
        </ul>
      </nav>


    </div>



  )



}

// function Navigation() {
//   const [sideBar, setSideBar] = useState(false)

//   const showSideBar = () => setSideBar(!sideBar)
//   return (
//     <>
//       <nav className="header__mobileNav">
//         <Link to="#" className="header__mobileBars">
//           <img src={menuIcon} alt={menuIcon} onClick={showSideBar} ></img>

//         </Link>
//       </nav>
//       <nav className={sideBar ? 'header__mobileNav--active' : 'header__mobileNav'}>
//         <ul className="header__mobileNavItems">
//           <li className="header__mobileNavToggle">
//             <Link to="#" className="header__mobileNavToggleIcon">
//               <img src={closeIcon} alt={closeIcon} ></img>
//             </Link>
//           </li>
//           {SideBarData.map((item, index) => {
//             return (
//               <li key={index} className={item.cName}>
//                 <link to={item.path}>
//                   {item.icon}
//                   <span>{item.title}</span>
//                 </link>
//               </li>
//             )
//           })}
//         </ul>
//       </nav>
//     </>
//   )
// }

export default Navigation