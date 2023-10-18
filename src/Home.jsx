import React from 'react'
import web from "../src/images/img2.svg.png"
import './Home.css'
const Home = () => {
  return (
    <>
    <section id='header' className='d-flex align-items-center'>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className='col-md-6 pt-5 mt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                        <h1 className='heading'>Learn Design with <br/><span className='nia'>Nia Matos</span></h1>
                        <h4 className='mt-5'>
                            Crafting Engaging Learning Experiences: <br/>Transforming  knowlegde into impactful <br/>Design for your Learning Journey.
                        </h4>
                        <div className="mt-3">
                            <div className="input-group">
                                <input type="search" className="form-control border-end-0 border search" value="search" id="example-search-input" />
                                <span className='input-group-append'>
                                    <button className="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5" type='button'>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={web} alt="" className="img-fluid animated" />
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Home
