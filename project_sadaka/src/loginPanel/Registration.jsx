import React from 'react';
import { NavLink } from 'react-router-dom';

const registration = () => {
    return (
      <div className="row">
        <div className="col-md-12 row text-center ">
          <h1>꧁༺ 𝓢𝓪𝓭𝓪𝓴𝓪 ༻꧂</h1>
        </div>
        <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
            <div className="panel panel-info">
                  <div className="panel-heading">SINGUP FORM</div>
                  <div className="panel-body">
                    <form role="form">
                      <div className="form-group">
                        <label>Enter Email</label>
                        <input className="form-control" type="text" />
                        <p className="help-block">Help text here.</p>
                      </div>
                      <div className="form-group">
                        <label>Enter Password</label>
                        <input className="form-control" type="password" />
                        <p className="help-block">Help text here.</p>
                      </div>
                      <div className="form-group">
                        <label>Re Type Password </label>
                        <input className="form-control" type="password" />
                        <p className="help-block">Help text here.</p>
                      </div>
                    <NavLink to="/signin">  <button type="submit" className="btn btn-success">
                        Register Now{" "}
                      </button></NavLink>
                       

                      <div className="form-group">
              <label className="checkbox-inline">
                <input type="checkbox" /> 
              </label>
              <span className="pull-right">
                <NavLink to ="/">Go to Home </NavLink>
              </span>
            </div>

                  </form>
                  </div>
            </div>

          </div>
         </div>
    );
};

export default registration;