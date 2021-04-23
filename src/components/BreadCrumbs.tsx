import React from 'react';
import { Breadcrumbs as Bread } from 'react-breadcrumbs-dynamic'
import { NavLink } from 'react-router-dom';

const Breadcrumbs:React.FC = () => {

  type Props = {
    children: JSX.Element
  }
  const Container: React.FC<Props> = ({children}: Props) => {

    return (
      <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2">
        <li className="breadcrumb-item">
          <NavLink to="/">
            <i className="flaticon2-shelter text-muted icon-1x"></i>
          </NavLink>
        </li>        
        {children}
      </ul>    
    )    
  }

  type PropsItem = {
    to: string
    children: JSX.Element
  }

  const Item: React.FC<PropsItem> = ({to, children}: PropsItem) => {
    return (
      <li className="breadcrumb-item">
        <NavLink className="text-muted" to={to}>{children}</NavLink>
      </li>    
    )
  }
  return (
    <Bread
      container={Container}
      item={Item}
      finalItem={Item}
    />
  )
}

export default Breadcrumbs