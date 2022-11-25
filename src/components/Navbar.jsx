import React from 'react'
import { useSelector } from 'react-redux';
import imgLogo from '../assets/img/pokedex_logo.png'
import Pokeball from './icons/Pokeball';

const Navbar = () => {
  const user = useSelector((state) => state.name);
  return (
    <nav className='nav'>
      <div className="nav__content">
      <img className='nav__logo' src={imgLogo} alt="pokedex" />
      {/* {
        user !== "" && <button className='nav__'>LogOut</button>
      } */}
      
      </div>
      <div className="line">
      <Pokeball className="nav__pattern"/>
      </div>
    </nav>
  )
}

export default Navbar