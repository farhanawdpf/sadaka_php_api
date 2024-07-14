import React from 'react';

const Table = () => {
    return (
        <div>
            <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>#No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>User No.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <span className="label label-danger">Mark</span>
                    </td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <span className="label label-info">100090</span>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>100090</td>
                  </tr>
                
                </tbody>
              </table>
            </div>
          </div>
         
        </div>
        </div>
    );
};

export default Table;