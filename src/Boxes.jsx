import React from 'react'
import webimg from "../src/images/boxes.jpg"
import './Boxes.css'
const Boxes = () => {
  return (
    <>
    <section id='boxes' className='d-flex align-items-center'>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">

                    <div className="row">

                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={webimg} alt="" className="img-fluid animated img-box" />
                    </div>
                    <div className='col-md-6 pt-5 mt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                        <h1 className='box-heading'>Smart Jackpots that you may love this anytime & anywhere</h1>
                        <h4 className='mt-5'>
                            Get your tests delivered at let home collect sample from the victory of <br/>the managment that supplies best design system guidelines ever.<br/> Get your tests delivered at let home collect samples.
                        </h4>
                        <div className="mt-3">
                        <button type="button" class="btn btn-warning explore-btn ">Explore</button>
                        </div>
                    </div>

                    
                    </div>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Boxes
