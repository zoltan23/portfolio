import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';
import './Navbar.css'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #333;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open }) => {

    const offset = -60

    return (
        <Ul open={open}>
                <Link className="nav-item" to="home" activeClass="active" smooth={true} duration={1000}>Home</Link>
                <Link className="nav-item" to="about" activeClass="active" smooth={true} duration={1000} offset={offset}>About</Link>
                <Link className="nav-item" to="projects" activeClass="active" smooth={true} duration={1000} offset={offset}>Projects</Link>
                <Link className="nav-item" to="knowledge" activeClass="active" smooth={true} duration={1000} offset={offset}>Knowledge</Link>
                <Link className="nav-item" to="contact" activeClass="active" smooth={true} duration={1000} offset={offset}>Contact</Link>
        </Ul>
    )
}

export default RightNav