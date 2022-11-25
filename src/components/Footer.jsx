import React from 'react'
import Pokeball from './icons/Pokeball'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="line">
      <Pokeball className="footer__pattern"/>
      </div>
      <p className='footer__text'>
      Made with ♥ in Academlo
      </p>  
    </footer >
  )
}

export default Footer