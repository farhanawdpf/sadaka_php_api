import AdminNavbar from "../../adminComponents/AdminNavbar";
import AdminSidebar from "../../adminComponents/AdminSidebar";
import AdminFooter from "../../adminComponents/AdminFooter";
import AdminSlider from "../../adminComponents/AdminSlider";
import { useNavigate, NavLink } from "react-router-dom";
import React, {useState }from "react";
import axios from "axios";

const AddUser = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [photo, setPhoto] = useState('')
    const navigate= useNavigate();    
    const save = () => {
        const formdata = new FormData()
        formdata.append('username', username)
        formdata.append('email', email)
        formdata.append('password', password)
        formdata.append('phone', phone)
        formdata.append('address', address)
        formdata.append('photo', photo)
        axios.post("http://localhost/sadaka_php_api/php/user/add_user.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data)
                setUsername('')
                setEmail('')
                setPassword('')
                setPhone('')
                setPhoto('')
                setAddress('')
                setPhoto(null)
                navigate('/manageUser')
            })
    }  
  return (
    <div>
      <AdminNavbar />
      <AdminSidebar />
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line">Add-User</h1>
              <NavLink to={`/manageUser`}>
                                    <button className="btn btn-info btn-lg">User List</button>
                                </NavLink>
              <AdminSlider />
            </div>
            <br />
            <div className=" row-center">
              <div className="modal-dialog col-md-6">
                <div className="modal-content col-md-12">
                  <div className="modal-body">
                    <form className="form-donation">
                      <h3 className="title-style-1 text-center">
                        Add Form <span className="title-under" />
                      </h3>
                      <div className="row"></div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                          
                            placeholder="User Name*"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          
                            placeholder="Email*"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          
                            placeholder="password*"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                           
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-12">
                          <textarea
                            cols={30}
                            rows={4}
                            className="form-control"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                           
                            placeholder="Address"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-12">
                                <input className="form-control form-control-lg mt-4" id="formFileLg" type="file" onChange={(e) => setPhoto(e.target.files[0])} />
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="form-group col-md-12">
                          <button
                            onClick={save}
                            className="btn btn-primary pull-right"
                          >
                            SUBMMIT NOW
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default AddUser;
