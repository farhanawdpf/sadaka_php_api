import React from 'react';
import AdminNavbar from '../adminComponents/AdminNavbar';
import AdminSidebar from '../adminComponents/AdminSidebar';
import AdminFooter from '../adminComponents/AdminFooter';
import AdminSlider from '../adminComponents/AdminSlider';

const ManageDonnetion = () => {
    return (
        <>
          <AdminNavbar />
          <AdminSidebar />

          <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">DONNETION:</h1>
                            <AdminSlider />
                        </div>
           
                        <>
  {/* Hello world */}
  <div className="row">
    <div className="col-md-12">
      {/*   Kitchen Sink */}
      <div className="panel panel-default">
        <div className="panel-heading">Manage_Donnetion</div>
        <div className="panel-body">
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>#No</th>
                  <th>Amount</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Note</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2000</td>
                  <td>Otto</td>
                  <td>mdo</td>
                  <td>@mdo</td>
                  <td>027455718774</td>
                  <td>Lalbagh</td>
                  <td>good</td>
                  <td>Edit/Delete</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End  Kitchen Sink */}
    </div>
   
  </div>
</>

                    </div>
                 </div>
                 <AdminFooter/>
             </div>
            
          
        </>
    );
};

export default ManageDonnetion;