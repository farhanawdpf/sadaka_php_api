
import AdminNavbar from '../adminComponents/AdminNavbar';
import AdminSidebar from '../adminComponents/AdminSidebar';
import AdminFooter from '../adminComponents/AdminFooter';
import AdminSlider from '../adminComponents/AdminSlider';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

const MangeDonner = () => {
   
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

                            <div className="col-md-12">
                                {/*    Context Classes  */}
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        Context Classes
                                    </div>
                                    <div className="panel-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>#S.No</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Address</th>
                                                        <th>Email</th>
                                                        <th>Password</th>
                                                        <th>Photo</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {items.map((data, i) => {
                                                        return (

                                                            <tr key={i}>
                                                                <th scope="row">{++i}</th>
                                                                <td>{data.fname}</td>
                                                                <td>{data.lname}</td>
                                                                <td>{data.address}</td>
                                                                <td>{data.email}</td>
                                                                <td>{data.password}</td>
                                                                <td>
                                                                    <img className='w-30' src={`http://localhost/React_practice/Fainal-project-of-React/Full-Project/php/donner/images/${data.photo}`} />
                                                                </td>
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
                                {/*  end  Context Classes  */}
                            </div>
                        </div>

                    </div>
                </div>
                <AdminFooter />
            </div>


        </>
    );
};

export default MangeDonner;