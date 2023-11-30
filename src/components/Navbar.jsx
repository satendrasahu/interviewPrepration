
import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components'
import { primaryColor, white } from '../utils/color';

const NavbarContainer = styled.div`
  margin: 10px 100px;
  display: flex;
  gap: 10px;
`;

const Navbar = () => {
    const style = {
      padding: "10px",
      background: primaryColor,
      color: white,
      textDecoration: "none",
      borderRadius: "5px",
    };
  return (
    <NavbarContainer>
      <NavLink to="/" style={style}>
        Home
      </NavLink>
      <NavLink to="/timer" style={style}>
        TIMER
      </NavLink>
      <NavLink to="/stopwatch" style={style}>
        STOPWATCH
      </NavLink>
      <NavLink to="/tictactoe" style={style}>
        TICTACTOE
      </NavLink>
      <NavLink to="/list" style={style}>
        LIST
      </NavLink>
      <NavLink to="/country_state_district" style={style}>
        Country : State : District
      </NavLink>
    </NavbarContainer>
  );
}

export default Navbar
