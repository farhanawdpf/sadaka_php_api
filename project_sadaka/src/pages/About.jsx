import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
        <Navbar/>
       
  <div className="page-heading text-center">
    <div className="container zoomIn animated">
      <h1 className="page-title">
        ABOUT US <span className="title-under" />
      </h1>
      <p className="page-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit Necessitatibus.
      </p>
    </div>
  </div>
  {/* Empact start */}
  <div id="impact">
    <div className="container">
      <div
        className="row text-center"
        data-scroll-reveal="enter from the bottom after .3s"
      >
        <div className="col-lg-12 col-md-8 col-sm-6   ">
          <h2>OUR IMPACT</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit onec
            molestie non sem vel condimentum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.{" "}
          </p>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 ">
          <div data-scroll-reveal="enter from the left after .5s">
            <h4>Provided Education </h4>
            <div className="progress">
              <div
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuenow={40}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "95%" }}
              >
                <span>95%</span>
              </div>
            </div>
          </div>
          <div data-scroll-reveal="enter from the left after .7s">
            <h4>Food Resources </h4>
            <div className="progress">
              <div
                className="progress-bar progress-bar-primary"
                role="progressbar"
                aria-valuenow={20}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "75%" }}
              >
                <span>75%</span>
              </div>
            </div>
          </div>
          <div data-scroll-reveal="enter from the left after .9s">
            <h4>Shelter Arrangement</h4>
            <div className="progress">
              <div
                className="progress-bar progress-bar-info"
                role="progressbar"
                aria-valuenow={60}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "90%" }}
              >
                <span>90%</span>
              </div>
            </div>
          </div>
          <div data-scroll-reveal="enter from the left after 1.1s">
            <h4>Fund Utilized</h4>
            <div className="progress">
              <div
                className="progress-bar progress-bar-success"
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "98%" }}
              >
                <span>98%</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 knob-sec"
          data-scroll-reveal="enter from the right after .8s"
        >
          <h4>HELP TO RAISE FUND</h4>
          <h5>
            Total Requirement of funds is <b>$ 3,90,000</b>
          </h5>
          <br />
          <input
            type="text"
            className="dial"
            data-step={10000}
            data-fgcolor="#ff0000"
            data-thickness=".3"
            defaultValue={310345}
            data-min={90}
            data-max={390000}
            data-displayprevious="true"
          />
          <h5>$ 3,10,345 Funds raised till date</h5>
        </div>
      </div>
    </div>
  </div>
  {/* Empact end */}
  <div className="main-container">
    <div className="container">
      <div className="row fadeIn animated">
        <div className="col-md-6">
          <img
            src="assets/images/about-us.jpg"
            alt=""
            className="img-responsive"
          />
        </div>
        <div className="col-md-6">
          <h2 className="title-style-2">
            ABOUT SADAKA <span className="title-under" />
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus, nulla quae possimus id fugit totam perspiciatis ad
            consequatur natus dolores unde ipsa, architecto, dignissimos
            corrupti explicabo provident debitis suscipit, beatae!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            pariatur, voluptatum molestiae voluptas ducimus tempora numquam
            eligendi quos, quia aut quidem et, odio deleniti amet natus
            accusamus fugit! Temporibus, tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            voluptatem, ea, quisquam vero ullam nesciunt recusandae expedita
            similique nisi! Ducimus, reiciendis, quia. Explicabo minima error
            excepturi minus, aperiam illum fugit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            pariatur, voluptatum molestiae voluptas ducimus tempora numquam
            eligendi quos, quia aut quidem et, odio deleniti amet natus
            accusamus fugit! Temporibus, tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            voluptatem, ea, quisquam vero ullam nesciunt recusandae expedita
            similique nisi! Ducimus, reiciendis, quia. Explicabo minima error
            excepturi minus, aperiam illum fugit , quia. Explicabo minima error
            excepturi minus, aperiam illum fugit.
          </p>
        </div>
      </div>{" "}
      {/* /.row */}
      <div className="section-home about-us">
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
        </div>{" "}
        {/* /.row */}
      </div>
    </div>{" "}
    {/* /.about-us */}
    <div className="our-team animate-onscroll fadeIn">
      <div className="container">
        <h2 className="title-style-1">
          Our Team <span className="title-under" />
        </h2>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="team-member">
              <div className="thumnail">
                <img
                  src="assets/images/team/member-1.jpg"
                  alt=""
                  className="cause-img"
                />
              </div>
              <h4 className="member-name">
                <a href="#">Robert C. Numbers</a>
              </h4>
              <div className="member-position">CO-FOUNDER</div>
              <div className="btn-holder">
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-envelope" />{" "}
                </a>
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-facebook" />{" "}
                </a>
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-google" />{" "}
                </a>
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-twitter" />{" "}
                </a>
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-linkedin" />{" "}
                </a>
              </div>
            </div>{" "}
            {/* /.team-member */}
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="team-member">
              <div className="thumnail">
                <img
                  src="assets/images/team/member-3.jpg"
                  alt=""
                  className="cause-img"
                />
              </div>
              <h4 className="member-name">
                <a href="#">Marjorie R. Echevarria</a>
              </h4>
              <div className="member-position">CO-FOUNDER</div>
              <div className="btn-holder">
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-envelope" />{" "}
                </a>
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-facebook" />{" "}
                </a>
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-google" />{" "}
                </a>
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-twitter" />{" "}
                </a>
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-linkedin" />{" "}
                </a>
              </div>
            </div>{" "}
            {/* /.team-member */}
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="team-member">
              <div className="thumnail">
                <img
                  src="assets/images/team/member-4.jpg"
                  alt=""
                  className="cause-img"
                />
              </div>
              <h4 className="member-name">
                <a href="#">Allison J. Falls</a>
              </h4>
              <div className="member-position">CO-FOUNDER</div>
              <div className="btn-holder">
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-envelope" />{" "}
                </a>
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-facebook" />{" "}
                </a>
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-google" />{" "}
                </a>
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-twitter" />{" "}
                </a>
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-linkedin" />{" "}
                </a>
              </div>
            </div>{" "}
            {/* /.team-member */}
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="team-member">
              <div className="thumnail">
                <img
                  src="assets/images/team/member-2.jpg"
                  alt=""
                  className="cause-img"
                />
              </div>
              <h4 className="member-name">
                <a href="#">Bryan B. Stevens</a>
              </h4>
              <div className="member-position">CO-FOUNDER</div>
              <div className="btn-holder">
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-envelope" />{" "}
                </a>
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-facebook" />{" "}
                </a>
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-google" />{" "}
                </a>
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-twitter" />{" "}
                </a>
                <a href="#" className="btn">
                  {" "}
                  <i className="fa fa-linkedin" />{" "}
                </a>
              </div>
            </div>{" "}
            {/* /.team-member */}
          </div>
        </div>{" "}
        {/* /.row */}
      </div>
    </div>
  </div>
  <Footer/>
</>

    );
};

export default About;