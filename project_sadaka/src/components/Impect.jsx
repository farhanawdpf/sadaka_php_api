import React from 'react';

const Impect = () => {
    return (
        <>
    <div className="col-lg-12 title-style-1  ">
          <h2>OUR IMPACT <span className="title-under" /></h2>
         
          <br />
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
        </>
    );
};

export default Impect;