import React from 'react'
import './header.scss'
function Header() {
  return (
    <header className="header">
      <div className="header__left">
        a logo goes here
      </div>
      <div className="header__center">
        search & date picker go here
      </div>
      <div className="header__right">
        login goes here
      </div>
    </header>
  )
}

export default Header;
