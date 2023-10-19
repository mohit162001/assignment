import React from 'react'
import './Tutorials.css'
const Tutorials = () => {

  return (
  
    <>
    <h1 className=' tutheading'>Tutorials that people love most</h1>
    <div className="container">
    <div className="wrapper">
    <i  className="fa-solid fa-angle-left"></i>
      <div className="carousel">
      <iframe width="350" height="350" src="https://www.youtube.com/embed/XMH85XoRZMQ?si=Nl5wXWWTHaU10plj&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      <iframe width="350" height="350" src="https://www.youtube.com/embed/6sg-Fav4FIo?si=cVVbGhKo9QD5Zjm-&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      <iframe width="350" height="350" src="https://www.youtube.com/embed/A-wi-zrMlzE?si=Z4-Gw-RfMZTHxqKr&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      
      </div>
      <i className="fa-solid fa-angle-right"></i>
    </div>
    </div>
    </>
  )
}

export default Tutorials