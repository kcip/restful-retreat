import React, { useEffect, useState, useRef } from 'react'
import './header.scss'
const Header = () => {

  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 50)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`} ref={ref}>
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
