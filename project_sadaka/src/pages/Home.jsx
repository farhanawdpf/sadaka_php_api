import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Map } from '../components/Map';
import { Sponser } from '../components/Sponsor';



const Home = () => {
    return (
        <>

         <Navbar/>
        {/* Hello world */}
        <div
          id="homeCarousel"
          className="carousel slide carousel-home"
          data-ride="carousel"
        >
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-target="#homeCarousel" data-slide-to={0} className="active" />
            <li data-target="#homeCarousel" data-slide-to={1} />
            <li data-target="#homeCarousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="assets/images/slider/home-slider-1.jpg" alt="" />
              <div className="container">
                <div className="carousel-caption">
                  <h2 className="carousel-title bounceInDown animated slow">
                    Because they need your help
                  </h2>
                  <h4 className="carousel-subtitle bounceInUp animated slow ">
                    Do not let them down
                  </h4>
                  <a
                    href="#"
                    className="btn btn-lg btn-secondary hidden-xs bounceInUp animated slow"
                    data-toggle="modal"
                    data-target="#donateModal"
                  >
                    DONATE NOW
                  </a>
                </div>{" "}
                {/* /.carousel-caption */}
              </div>
            </div>{" "}
            {/* /.item */}
            <div className="item ">
              <img src="assets/images/slider/home-slider-2.jpg" alt="" />
              <div className="container">
                <div className="carousel-caption">
                  <h2 className="carousel-title bounceInDown animated slow">
                    Together we can improve their lives
                  </h2>
                  <h4 className="carousel-subtitle bounceInUp animated slow">
                    {" "}
                    So let do it !
                  </h4>
                  <a
                    href="#"
                    className="btn btn-lg btn-secondary hidden-xs bounceInUp animated"
                    data-toggle="modal"
                    data-target="#donateModal"
                  >
                    DONATE NOW
                  </a>
                </div>{" "}
                {/* /.carousel-caption */}
              </div>
            </div>{" "}
            {/* /.item */}
            <div className="item ">
              <img src="assets/images/slider/home-slider-3.jpg" alt="" />
              <div className="container">
                <div className="carousel-caption">
                  <h2 className="carousel-title bounceInDown animated slow">
                    A penny is a lot of money, if you have not got a penny.
                  </h2>
                  <h4 className="carousel-subtitle bounceInUp animated slow">
                    You can make the diffrence !
                  </h4>
                  <a
                    href="#"
                    className="btn btn-lg btn-secondary hidden-xs bounceInUp animated slow"
                    data-toggle="modal"
                    data-target="#donateModal"
                  >
                    DONATE NOW
                  </a>
                </div>{" "}
                {/* /.carousel-caption */}
              </div>
            </div>{" "}
            {/* /.item */}
          </div>
          <a
            className="left carousel-control"
            href="#homeCarousel"
            role="button"
            data-slide="prev"
          >
            <span className="fa fa-angle-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#homeCarousel"
            role="button"
            data-slide="next"
          >
            <span className="fa fa-angle-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* /.carousel */}
        <div className="section-home about-us fadeIn animated">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="about-us-col">
                  <div className="col-icon-wrapper">
                    <img src="assets/images/icons/our-mission-icon.png" alt="" />
                  </div>
                  <h3 className="col-title">our mission</h3>
                  <div className="col-details">
                    <p>
                      Lorem ipsum dolor sit amet consect adipisscin elit proin vel
                      lectus ut eta esami vera dolor sit amet consect
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    {" "}
                    Read more{" "}
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="about-us-col">
                  <div className="col-icon-wrapper">
                    <img src="assets/images/icons/make-donation-icon.png" alt="" />
                  </div>
                  <h3 className="col-title">Make donations</h3>
                  <div className="col-details">
                    <p>
                      Lorem ipsum dolor sit amet consect adipisscin elit proin vel
                      lectus ut eta esami vera dolor sit amet consect
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    {" "}
                    Read more{" "}
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="about-us-col">
                  <div className="col-icon-wrapper">
                    <img src="assets/images/icons/help-icon.png" alt="" />
                  </div>
                  <h3 className="col-title">Help &amp; support</h3>
                  <div className="col-details">
                    <p>
                      Lorem ipsum dolor sit amet consect adipisscin elit proin vel
                      lectus ut eta esami vera dolor sit amet consect
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    {" "}
                    Read more{" "}
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="about-us-col">
                  <div className="col-icon-wrapper">
                    <img src="assets/images/icons/programs-icon.png" alt="" />
                  </div>
                  <h3 className="col-title">our programs</h3>
                  <div className="col-details">
                    <p>
                      Lorem ipsum dolor sit amet consect adipisscin elit proin vel
                      lectus ut eta esami vera dolor sit amet consect
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    {" "}
                    Read more{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* /.about-us */}
        <div><h2 className="title-style-1">
                OUR ACHIEVEMENT <span className="title-under" />
              </h2></div>
       
    {/* Wrapper for slides */}
    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <img src="assets/images/causes/slider/cause-slider-1.jpg" alt="" />
      </div>
      <div className="item">
        <img src="assets/images/causes/slider/cause-slider-2.jpg" alt="" />
      </div>
    </div>
  


        {/* /.home-reasons */}
        
        <div className="main-container">
          <div className="our-causes fadeIn animated">
            <div className="container">
              <h2 className="title-style-1">
                OUR MISSIOM <span className="title-under" />
              </h2>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="cause">
                    <img
                      src="assets/images/causes/cause-hunger.jpg"
                      alt=""
                      className="cause-img"
                    />
                    <div className="progress cause-progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "30%" }}
                      >
                        10$ / 500$
                      </div>
                    </div>
                    <h4 className="cause-title">
                      <a href="#">HUNGER AND POVERTY </a>
                    </h4>
                    <div className="cause-details">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                      eros rutrum turpis viverra elementum semper quis ex. Donec lorem
                      nulla, aliquam quis neque vel, maximus lacinia urna.
                    </div>
                    <div className="btn-holder text-center">
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#donateModal"
                      >
                        {" "}
                        DONATE NOW
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.cause */}
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="cause">
                    <img
                      src="assets/images/causes/cause-education.jpg"
                      alt=""
                      className="cause-img"
                    />
                    <div className="progress cause-progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        400$ / 700$
                      </div>
                    </div>
                    <h4 className="cause-title">
                      <a href="#">EDUCATION AND TRAINING</a>
                    </h4>
                    <div className="cause-details">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                      eros rutrum turpis viverra elementum semper quis ex. Donec lorem
                      nulla, aliquam quis neque vel, maximus lacinia urna.
                    </div>
                    <div className="btn-holder text-center">
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#donateModal"
                      >
                        {" "}
                        DONATE NOW
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.cause */}
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="cause">
                    <img
                      src="assets/images/causes/cause-rights.jpg"
                      alt=""
                      className="cause-img"
                    />
                    <div className="progress cause-progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "40%" }}
                      >
                        400$ / 1000$
                      </div>
                    </div>
                    <h4 className="cause-title">
                      <a href="#">HUMAN RIGHTS</a>
                    </h4>
                    <div className="cause-details">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                      eros rutrum turpis viverra elementum semper quis ex. Donec lorem
                      nulla, aliquam quis neque vel, maximus lacinia urna.
                    </div>
                    <div className="btn-holder text-center">
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#donateModal"
                      >
                        {" "}
                        DONATE NOW
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.cause */}
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="cause">
                    <img
                      src="assets/images/causes/cause-culture.jpg"
                      alt=""
                      className="cause-img"
                    />
                    <div className="progress cause-progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        400$ / 700$
                      </div>
                    </div>
                    <h4 className="cause-title">
                      <a href="#">ARTS AND CULTURE </a>
                    </h4>
                    <div className="cause-details">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                      eros rutrum turpis viverra elementum semper quis ex. Donec lorem
                      nulla, aliquam quis neque vel, maximus lacinia urna.
                    </div>
                    <div className="btn-holder text-center">
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#donateModal"
                      >
                        {" "}
                        DONATE NOW
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.cause */}
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="cause">
                    <img
                      src="assets/images/causes/cause-hunger.jpg"
                      alt=""
                      className="cause-img"
                    />
                    <div className="progress cause-progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "30%" }}
                      >
                        10$ / 500$
                      </div>
                    </div>
                    <h4 className="cause-title">
                      <a href="#">HUNGER AND POVERTY </a>
                    </h4>
                    <div className="cause-details">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                      eros rutrum turpis viverra elementum semper quis ex. Donec lorem
                      nulla, aliquam quis neque vel, maximus lacinia urna.
                    </div>
                    <div className="btn-holder text-center">
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#donateModal"
                      >
                        {" "}
                        DONATE NOW
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.cause */}
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="cause">
                    <img
                      src="assets/images/causes/cause-education.jpg"
                      alt=""
                      className="cause-img"
                    />
                    <div className="progress cause-progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        400$ / 700$
                      </div>
                    </div>
                    <h4 className="cause-title">
                      <a href="#">EDUCATION AND TRAINING</a>
                    </h4>
                    <div className="cause-details">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                      eros rutrum turpis viverra elementum semper quis ex. Donec lorem
                      nulla, aliquam quis neque vel, maximus lacinia urna.
                    </div>
                    <div className="btn-holder text-center">
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#donateModal"
                      >
                        {" "}
                        DONATE NOW
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.cause */}
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="cause">
                    <img
                      src="assets/images/causes/cause-rights.jpg"
                      alt=""
                      className="cause-img"
                    />
                    <div className="progress cause-progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "40%" }}
                      >
                        400$ / 1000$
                      </div>
                    </div>
                    <h4 className="cause-title">
                      <a href="#">HUMAN RIGHTS</a>
                    </h4>
                    <div className="cause-details">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                      eros rutrum turpis viverra elementum semper quis ex. Donec lorem
                      nulla, aliquam quis neque vel, maximus lacinia urna.
                    </div>
                    <div className="btn-holder text-center">
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#donateModal"
                      >
                        {" "}
                        DONATE NOW
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.cause */}
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="cause">
                    <img
                      src="assets/images/causes/cause-culture.jpg"
                      alt=""
                      className="cause-img"
                    />
                    <div className="progress cause-progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        400$ / 700$
                      </div>
                    </div>
                    <h4 className="cause-title">
                      <a href="#">ARTS AND CULTURE </a>
                    </h4>
                    <div className="cause-details">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                      eros rutrum turpis viverra elementum semper quis ex. Donec lorem
                      nulla, aliquam quis neque vel, maximus lacinia urna.
                    </div>
                    <div className="btn-holder text-center">
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#donateModal"
                      >
                        {" "}
                        DONATE NOW
                      </a>
                    </div>
                  </div>{" "}
                  {/* /.cause */}
                </div>
              </div>
            </div>
          </div>{" "}
          {/* /.our-causes */}
        </div>{" "}
        {/* /.our-causes */}
        <div className="section-home our-sponsors animate-onscroll fadeIn">
          <div className="container">
            <h2 className="title-style-1">
              Our Sponsors <span className="title-under" />
            </h2>
            <ul className="owl-carousel list-unstyled list-sponsors">
              <li>
                {" "}
                <img src="assets/images/sponsors/bus.png" alt="" />
              </li>
              <li>
                {" "}
                <img src="assets/images/sponsors/wikimedia.png" alt="" />
              </li>
              <li>
                {" "}
                <img src="assets/images/sponsors/one-world.png" alt="" />
              </li>
              <li>
                {" "}
                <img src="assets/images/sponsors/wikiversity.png" alt="" />
              </li>
              <li>
                {" "}
                <img src="assets/images/sponsors/united-nations.png" alt="" />
              </li>
              <li>
                {" "}
                <img src="assets/images/sponsors/bus.png" alt="" />
              </li>
              <li>
                {" "}
                <img src="assets/images/sponsors/wikimedia.png" alt="" />
              </li>
              <li>
                {" "}
                <img src="assets/images/sponsors/one-world.png" alt="" />
              </li>
              <li>
                {" "}
                <img src="assets/images/sponsors/wikiversity.png" alt="" />
              </li>
              <li>
                {" "}
                <img src="assets/images/sponsors/united-nations.png" alt="" />
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* /.our-sponsors */}
        
        {/* Donate Modal */}
        <div
          className="modal fade"
          id="donateModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="donateModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title" id="donateModalLabel">
                  DONATE NOW
                </h4>
              </div>
              <div className="modal-body">
                <form className="form-donation">
                  <h3 className="title-style-1 text-center">
                    Thank you for your donation <span className="title-under" />
                  </h3>
                  <div className="row">
                    <div className="form-group col-md-12 ">
                      <input
                        type="text"
                        className="form-control"
                        id="amount"
                        placeholder="AMOUNT(€)"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        placeholder="First name*"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        placeholder="Last name*"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email*"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <textarea
                        cols={30}
                        rows={4}
                        className="form-control"
                        name="note"
                        placeholder="Additional note"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <button
                        type="submit"
                        className="btn btn-primary pull-right"
                        name="donateNow"
                      >
                        DONATE NOW
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* /.modal */}
        <Sponser/>
        <Map/>
        <Footer/>
      </>
      
    );
};

export default Home;