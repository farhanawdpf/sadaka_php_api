import React from 'react';
import "./FormDonnetion.css";
import AdminNavbar from '../adminComponents/AdminNavbar';
import AdminSidebar from '../adminComponents/AdminSidebar';
import AdminSlider from '../adminComponents/AdminSlider';
import AdminFooter from '../adminComponents/AdminFooter';

const AddDonation = () => {
    return (
        <>
            <AdminNavbar/>
            <AdminSidebar/>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Donation:</h1>
                            <AdminSlider />
                        </div> <br />
                        <div className="row justify-content">
                            <div className="modal-dialog col-md-6">
                                <div className="modal-content col-md-12">
                                    <div className="modal-body">
                                        <form className="form-donation">
                                            <h3 className="title-style-1 ">
                                                Thank you for your donation <span className="title-under" />
                                            </h3>
                                            <div className="row">
                                                <div className="form-group col-md-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="amount"
                                                        placeholder="AMOUNT(€)"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="firstName"
                                                        placeholder="First name*"
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
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
                                                        name="email"
                                                        placeholder="Email*"
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
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
                                                        name="note"
                                                        placeholder="Additional note"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-12">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary pull-right"
                                                        name="donateNow"
                                                    >
                                                        DONATE NOW
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

export default AddDonation;
