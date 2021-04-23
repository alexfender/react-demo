import React, { useState, useRef, useEffect } from 'react'
import { ReactSVG } from 'react-svg'
import Cart3 from '../assets/svg/cart3.svg'
import BadgeCart from './BadgeCart'
import DropdownCart from './DropdownCart'


const Header:React.FC = () => {

  const [show, setShow] = useState(false)
  const refCart = useRef(null)


  const showDropdownCart = () => {
    setShow(prev => !prev)
  }

  const toggle: any = (e: React.ChangeEvent<HTMLElement>): void => {
    const el = refCart?.current
    if (!el || !(el as Node).contains(e.target)) {
      setShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', toggle)
    return () => {
      document.removeEventListener('click', toggle)
    }
  }, [show])


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
          <div id="kt_quick_search_toggle" className="dropdown" ref={refCart}>
            <div className="topbar-item">
              <div className="btn btn-icon btn-clean btn-lg btn-dropdown mr-1" onClick={showDropdownCart} style={{position: 'relative'}}>
                <ReactSVG src={Cart3} className="svg-icon svg-icon-xl svg-icon-primary" />
                <BadgeCart />
              </div>
            </div>
            {show && <DropdownCart />}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Header