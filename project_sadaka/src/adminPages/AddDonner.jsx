
import AdminNavbar from '../adminComponents/AdminNavbar';
import AdminSidebar from '../adminComponents/AdminSidebar';
import AdminFooter from '../adminComponents/AdminFooter';
import AdminSlider from '../adminComponents/AdminSlider';
// import Addform from '../adminComponents/Addform';
import React, {useState }from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const AddDonner = () => {
    const [fName, setfName] = useState('')
    const [lName, setlName] = useState('')
    const [Address, setAddress] = useState('')
    const [Email, setEmail] = useState('')
    const [phone, setphone] = useState('')
   
    const navigate= useNavigate();    
    const save = () => {
        const formdata = new FormData()
        formdata.append('fName', fName)
        formdata.append('lName', lName)
        formdata.append('Address', Address)
        formdata.append('Email', Email)
        formdata.append('phone', phone)
      
        axios.post("http://localhost/React_practice/Fainal-project-of-React/Full-Project/php/donner/add_donner.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data)
                setfName('')
                setlName('')
                setAddress('')
                setEmail('')
                setphone('')
               
                navigate('/mangeDonner')
            })
    } 

    return (
        <>
            <AdminNavbar />
            <AdminSidebar />
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">DONNER:</h1>
                            <AdminSlider />
                        </div>
                        <div className="row">
                            <div className="col-md-12  col-sm-12   ">
                                <div className="panel panel-denger">
                                    <div className="panel-heading">Donner-Details</div>
                                    <div className="panel-body">
                                        <form role="form">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input className="form-control" type="text" />
                                                <p className="help-block">Pleace text here First Name.</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input className="form-control" type="text" />
                                                <p className="help-block">Pleace text here last Name.</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Address </label>
                                                <input className="form-control" type="textaria" />
                                                <p className="help-block"> text here your Address.</p>
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input className="form-control" type="text" />
                                                <p className="help-block">Help text here.</p>
                                            </div>
                                            <div className="form-group">
                                                <label> Phone </label>
                                                <input className="form-control" type="password" />
                                                <p className="help-block">Help text here.</p>
                                            </div>
                                           


                                           
                                        <div>
                                            <button onClick={save} className="btn btn-primary mt-4 btn-lg">Submit</button>
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

export default AddDonner;