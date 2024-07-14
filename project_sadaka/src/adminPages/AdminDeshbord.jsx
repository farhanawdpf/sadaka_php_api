import React from 'react';
// import Table from '../adminComponents/Table';
import AdminSlider from '../adminComponents/AdminSlider';
import AdminFooter from '../adminComponents/AdminFooter';
import BarChart from '../adminComponents/Charts/BarChart';
import HalfPieChart from '../adminComponents/Charts/HalfPieChart';


const AdminDeshbord = () => {
    return (
        <div id="page-wrapper">
      <div id="page-inner">
        <div className="row">
        <h1 className="page-head-line">DASHBOARD</h1>
          <div className="col-md-8">
          <BarChart/>
          </div>
          <div className="col-md-4">
           <HalfPieChart/>
           <h1>Donnetion of Mission</h1>
          </div>
          
        </div>
        {/* /. ROW  */}

        <div className="row">
            <div className="col-md-6">
              <div className="main-box mb-red">
                <a href="#">
                  <i className="material-icons-outlined" />
                  <h5>Total-Donetion</h5>
                  <h3>50</h3>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="main-box mb-red">
                <a href="#">
                  <i className="material-icons-outlined" />
                  <h5>Total-spend</h5>
                  <h3>50</h3>
                </a>
              </div>
            </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="main-box mb-red">
              <a href="#">
                <i className="material-icons-outlined" />
                <h5>Mission</h5> <hr />
                <h3>50</h3>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="main-box mb-dull">
              <a href="#">
                <i className="" />
                <h5>Donner</h5> <hr />
                <h3>589</h3>

              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="main-box mb-pink">
              <a href="#">
                <i className="" />
                <h5> volunteer</h5> <hr />
                <h3>845</h3>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="main-box mb-Green">
              <a href="#">
                <i className="" />
                <h5>Underprevilege</h5> <hr />
                <h3>845</h3>
              </a>
            </div>
          </div>
        </div>
        {/* /. ROW  */}
        <AdminSlider/>
          {/* <Table/> */}
      </div>
      <AdminFooter/>
    </div>
    );
};

export default AdminDeshbord;