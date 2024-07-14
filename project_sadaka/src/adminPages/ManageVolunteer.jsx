
import axios from 'axios';
import  { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import AdminNavbar from '../adminComponents/AdminNavbar';
import AdminSidebar from '../adminComponents/AdminSidebar';
import AdminFooter from '../adminComponents/AdminFooter';
import AdminSlider from '../adminComponents/AdminSlider';

const ManageVolunteer = () => {
  const [volunteers, setvolunteers] = useState([]);

  const itemDelete = (id) => {
      axios.post("http://localhost/practice-react/main/api-php/product/deleteItem.php?id=" + id)
          .then((res) => (console.log(res)))

      axios.get("http://localhost/react_practice/demo2_sadaka/sadaka_php_api/php/volunteers/list_volunteers.php")
          .then((res) => setvolunteers(res.data))
  }

  useEffect(() => {
      axios.get("http://localhost/react_practice/demo2_sadaka/sadaka_php_api/php/volunteers/list_volunteers.php")
          .then((res) => setvolunteers(res.data))
  }, [])

    return (
        <>
        <AdminNavbar />
        <AdminSidebar />

        <div id="page-wrapper">
              <div id="page-inner">
                  <div className="row">
                      <div className="col-md-12">
                          <h1 className="page-head-line">Volunteer:</h1>
                          <AdminSlider />
                      </div>
         
                      <>
{/* Hello world */}
<div className="row">
  <div className="col-md-12">
    {/*   Kitchen Sink */}
    <div className="panel panel-default">
      <div className="panel-heading">Manage_Volunteer</div>
      <div className="panel-body">
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>#No</th>
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
            {volunteers.map((data, i) => {
                    return (
                  
                    <tr key={i}>
                        <th scope="row">{++i}</th>
                        <td>{data.fname}</td>
                        <td>{data.lname}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>{data.address}</td>
                        <td>{data.note}</td>
                        
                        <td>
                            <NavLink to={`/itemedit/${data.id}`}>
                                <button className='btn btn-info mb-2 mt-2'>Update</button>
                            </NavLink>
                            <button className='btn btn-danger' onClick={() => { itemDelete(data.id) }}>Delete</button>
                        </td>
                    </tr>
                    
                    )
                })}

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

export default ManageVolunteer;