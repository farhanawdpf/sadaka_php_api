import React from 'react';
import AdminNavbar from '../adminComponents/AdminNavbar';
import AdminSidebar from '../adminComponents/AdminSidebar';
import AdminSlider from '../adminComponents/AdminSlider';
import AdminFooter from '../adminComponents/AdminFooter';
import  {useState }from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const AddVolunteer = () => {
    
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [address, setaddress] = useState('')
    const [note, setnote] = useState('')
    const navigate= useNavigate();    
    const save = () => {
        const formdata = new FormData()
        formdata.append('fname', fname)
        formdata.append('lname', lname)
        formdata.append('email', email)
        formdata.append('phone', phone)
        formdata.append('address', address)
        formdata.append('note', note)
        axios.post("http://localhost/react_practice/demo2_sadaka/sadaka_php_api/php/volunteers/add_volunteer.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data)
                setfname('')
                setlname('')
                setemail('')
                setphone('')
                setaddress('')
                setnote('')
              
                navigate('/manageVolunteer')
            })
    } 


    return (
        <>
           <AdminNavbar/>
           <AdminSidebar/>
           <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Volunteer:</h1>
                            <AdminSlider />
                        </div> <br />
                        <div className=" row-center">
                            <div className="modal-dialog col-md-6">
                                    <div className="modal-content col-md-12">
                                    
                                        <div className="modal-body">
                                            <form className="form-donation">
                                            <h3 className="title-style-1 text-center">
                                                Thank you for join Us <span className="title-under" />
                                            </h3>
                                            <div className="row">
                                                
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    onChange={(e) => setName(e.target.value)}
                                                    value={fname}
                                                    name="firstName"
                                                    placeholder="First name*"
                                                />
                                                </div>
                                                <div className="form-group col-md-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    onChange={(e) => setName(e.target.value)}
                                                    value={lname}
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
                                                    onChange={(e) => setName(e.target.value)}
                                                    value={email}
                                                    name="email"
                                                    placeholder="Email*"
                                                />
                                                </div>
                                                <div className="form-group col-md-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    onChange={(e) => setName(e.target.value)}
                                                    value={phone}
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
                                                    onChange={(e) => setName(e.target.value)}
                                                    value={address}
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
                                                    onChange={(e) => setName(e.target.value)}
                                                    value={note}
                                                    name="note"
                                                    placeholder="Additional note"
                                                    defaultValue={""}
                                                />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-12">
                                                <button
                                                   onClick={save}
                                                    type="submit"
                                                    className="btn btn-primary pull-right"
                                                    name="donateNow"
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

        

          

        </>
    );
};

export default AddVolunteer;