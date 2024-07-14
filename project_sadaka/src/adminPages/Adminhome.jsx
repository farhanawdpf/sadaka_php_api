import React from 'react';
import AdminNavbar from '../adminComponents/AdminNavbar';
import AdminSidebar from '../adminComponents/AdminSidebar';

import AdminDeshbord from './AdminDeshbord';

const Adminhome = () => {
    return (
        <div>
          <AdminNavbar/>
          <AdminSidebar/>
            <>
           <AdminDeshbord/>

            </>
           
        </div>
    );
};

export default Adminhome;