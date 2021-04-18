import React from 'react';
import { ReactSVG } from 'react-svg'
import AngleDoubleLeft from '../assets/svg/angle-double-left.svg'
import Cap2 from '../assets/svg/cap-2.svg'
import LogoLight from '../assets/png/logo-light.png'
import { NavLink } from 'react-router-dom'

const Aside:React.FC = () => {
  return (
    <div id="kt_aside" className="aside aside-left  aside-fixed d-flex flex-column flex-row-auto">
      <div className="brand flex-column-auto " id="kt_brand" >
        <a className="brand-logo" href="/">
          <img alt="logo" src={LogoLight} />
        </a>
        <button className="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
          <ReactSVG src={AngleDoubleLeft} className="svg-icon svg-icon-xl" />
        </button>
      </div>

      <div id="kt_aside_menu_wrapper" className="aside-menu-wrapper flex-column-fluid">
        <div id="kt_aside_menu" className="aside-menu my-4 scroll ps ps--active-y" style={{ height: '444px', overflow: 'hidden'}}>
          <ul className="menu-nav ">
            
            <li className="menu-section ">
              <h4 className="menu-text">Продажи</h4>
              <i className="menu-icon flaticon-more-v2"></i>
            </li>

            <li className="menu-item " >
              <NavLink className="menu-link" to="/new-order">
                <ReactSVG src={Cap2} className="svg-icon menu-icon" />
                <span className="menu-text">Новый заказ</span>
              </NavLink>
            </li>       

            <li className="menu-item " >
              <NavLink className="menu-link" to="/orders">
                <ReactSVG src={Cap2} className="svg-icon menu-icon" />
                <span className="menu-text">Заказы</span>
              </NavLink>
            </li>

            <li className="menu-item " >
              <NavLink className="menu-link" to="/corr">
                <ReactSVG src={Cap2} className="svg-icon menu-icon" />
                <span className="menu-text">Корректировки</span>
              </NavLink>
            </li>

            <li className="menu-section ">
              <h4 className="menu-text">Закупки</h4>
              <i className="menu-icon flaticon-more-v2"></i>
            </li>

            <li className="menu-item " >
              <NavLink className="menu-link" to="/intakes">
                <ReactSVG src={Cap2} className="svg-icon menu-icon" />
                <span className="menu-text">Поступления</span>
              </NavLink>
            </li>


          </ul>
        </div>
      </div>
    </div>
  )
}


export default Aside