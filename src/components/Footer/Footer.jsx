import React from 'react'

const Footer = () => {
  //Button Scroll Up
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="footer">
      <div className="navbar">
        <a href="https://adrianalima.vercel.app" target="_blank">Developer: Adriana Lima</a>

        <div onClick={scrollToTop}>
          <img
            src="/scroll-up-50.png"
            className="scroollUp"
            alt="Volte ao topo"
            priority
          />
        </div>

      </div>
    </div>
  )
}

export default Footer