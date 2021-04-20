import React, { useState, useRef } from 'react'
import { ReactSVG } from 'react-svg'
import Cart3 from '../assets/svg/cart3.svg'
import DropdownCart from './DropdownCart'


const Header:React.FC = () => {

  const [show, setShow] = useState(false)
  const refCart = useRef(null)

  console.log(refCart);
  

  const showDropdownCart = () => {
    setShow(true)
  }


  return (
    <div className="header header-fixed" id="kt_header">
      <div className=" container-fluid d-flex align-items-stretch justify-content-between">
        <div className="header-progress-bar" style={{height: '3px', width: '100%'}}></div>

        <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
          <div id="kt_header_menu" className="header-menu header-menu-mobile header-menu-layout-default">
            <ul className="menu-nav ">
              <li className="menu-item menu-item-rel ">
                <a className="menu-link" href="/metronic/react/demo1/dashboard">
                  <span className="menu-text">Dashboard</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="topbar">
          <div id="kt_quick_search_toggle" className="dropdown">
            <div className="topbar-item">
              <div className="btn btn-icon btn-clean btn-lg btn-dropdown mr-1" onClick={showDropdownCart}>
                <ReactSVG src={Cart3} className="svg-icon svg-icon-xl svg-icon-primary" />
              </div>
            </div>
            {show && <div ref={refCart}><DropdownCart /></div>}
            
          </div>
        </div>
      </div>
    </div>
  )
}


export default Header