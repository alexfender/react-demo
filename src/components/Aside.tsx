import React from 'react';
import { ReactSVG } from 'react-svg'
import AngleDoubleLeft from '../assets/svg/angle-double-left.svg'
import Cap2 from '../assets/svg/cap-2.svg'
import LogoLight from '../assets/png/logo-light.png'
import { NavLink, Route } from 'react-router-dom'



const Aside:React.FC = () => {


  const ListItemLink = ({ to, icon, name } : {to: string, icon: string, name: string}) => {
    return (
      <Route path={to} children={({match}) => (
        <li className={match ? 'menu-item menu-item-active' : 'menu-item'}>
          <NavLink className="menu-link" to={to} activeClassName="active">
            <ReactSVG src={icon} className="svg-icon menu-icon" />
            <span className="menu-text">{name}</span>
          </NavLink>
        </li>
      )}/>
    );
  }

  const ListSectionLink = ({name}: {name: string}) => {
    return (
      <li className="menu-section ">
        <h4 className="menu-text">{name}</h4>
        <i className="menu-icon flaticon-more-v2"></i>
      </li>
    )
  }


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
            <ListSectionLink name="Продажи"/>
            <ListItemLink to="/new-order" icon={Cap2} name="Новый заказ" />
            <ListItemLink to="/orders" icon={Cap2} name="Заказы" />
            <ListItemLink to="/corr" icon={Cap2} name="Корректировки" />
            <ListSectionLink name="Закупки"/>
            <ListItemLink to="/intakes" icon={Cap2} name="Поступления" />
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Aside