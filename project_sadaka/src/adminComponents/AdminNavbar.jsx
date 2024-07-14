import { NavLink } from "react-router-dom";
import "./AdminNav.css";

function AdminNavbar() {
  return (
   
           <div className="flex">
      <NavLink to ="/"><img src="assets/images/sadaka-logo.png" alt="logo Sadaka" /></NavLink>
      <div style={{ display: "flex" }}>
        <input className="search" type="text" placeholder="Donner searching....."/>
        <button className="baton">Search</button>
      </div>
      
       <NavLink to="/signin"><button className="logbaton ">Logout</button></NavLink>
      
    </div>
    
  );
}

export default AdminNavbar;
