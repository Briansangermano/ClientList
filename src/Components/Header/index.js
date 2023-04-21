import React from 'react';
import './styles.css'; 
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='headerContainer'>
        <div className='titleText'>Client List App</div>
        <nav>

          <NavLink className={({isActive})=> isActive ? 'navigationActive' : 'navigationInactive'} to="/">
            List
          </NavLink>
          <NavLink className={({isActive})=> isActive ? 'navigationActive' : 'navigationInactive'} to="/form">
            Add Client
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;
