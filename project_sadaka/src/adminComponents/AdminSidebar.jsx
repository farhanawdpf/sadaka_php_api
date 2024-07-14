import React from 'react';

import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div id="wrapper">
            <nav className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">
                        <li>
                            <NavLink to="/adminhome">
                                <i className="fa fa-desktop" />
                                <h3>Dashboard</h3> <span className="fa arrow" />
                            </NavLink>
                            <ul className="nav nav-second-level">
                                <li>
                                    <NavLink to="/addDonner">
                                        <i className="fa fa-toggle-on" />
                                        Add-Donor
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/mangeDonner">
                                        <i className="fa fa-recycle" />
                                        Manage-Donor
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-yelp" />
                                User <span className="fa arrow" />
                            </a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <NavLink to="/addUser">
                                        <i className="fa fa-toggle-on" />
                                        Add-User
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/manageUser">
                                        <i className="fa fa-recycle" />
                                        Manage-User
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-yelp" />
                                Donation <span className="fa arrow" />
                            </a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <NavLink to="/addDonnetion">
                                        <i className="fa fa-toggle-on" />
                                        Add-Donation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/manageDonnetion">
                                        <i className="fa fa-recycle" />
                                        Manage-Donation
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-yelp" />
                                Volunteer <span className="fa arrow" />
                            </a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <NavLink to="/addVolunteer">
                                        <i className="fa fa-toggle-on" />
                                        Add-Volunteer
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/manageVolunteer">
                                        <i className="fa fa-recycle" />
                                        Manage-Volunteer
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="table.html">
                                <i className="fa fa-bell" />
                                Notifications
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-bicycle" />
                                Forms <span className="fa arrow" />
                            </a>
                            <ul className="nav nav-second-level">
                            </ul>
                        </li>

                        <li>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                        
                        
                            
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default AdminSidebar;
