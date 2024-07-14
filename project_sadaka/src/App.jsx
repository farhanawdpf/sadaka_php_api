

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Mission1 from './pages/Mission1';
import Mission2 from './pages/Mission2';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import PzSponsors from './pages/PzSponsors';
import Signin from './loginPanel/Signin';
import Registration from './loginPanel/Registration';
import Adminhome from './adminPages/Adminhome';
import AdminNavbar from './adminComponents/AdminNavbar';
import AdminSidebar from './adminComponents/AdminSidebar';
import AdminFooter from './adminComponents/AdminFooter';
import AdminDeshbord from './adminPages/AdminDeshbord';
import Table from './adminComponents/Table';
import AdminSlider from './adminComponents/AdminSlider';
import AddDonner from './adminPages/AddDonner';
import MangeDonner from './adminPages/MangeDonner';
import AddDonnetion from './adminPages/AddDonnetion';
import ManageDonnetion from './adminPages/ManageDonnetion';
import AddVolunteer from './adminPages/AddVolunteer';
import ManageVolunteer from './adminPages/ManageVolunteer';
import Impect from './components/Impect';
import AddUser from './adminPages/user/AddUser';
import ManageUser from './adminPages/user/ManageUser';


// import { Map } from './components/Map';



const App = () => {
  return (
    <>
    
    <Router>
      
      {/* <Navbar/> */}
      <Routes>    
        <Route path = "/" element = { <Home />} />
        <Route path = "/about" element = { <About />} />
        <Route path = "/impect" element = { <Impect />} />
        <Route path = "/mission1" element = { <Mission1 />} />
        <Route path = "/mission2" element = { <Mission2 />} />
        <Route path = "/gallery" element = { <Gallery />} />
        <Route path = "/contact" element = { <Contact />} />
        <Route path = "/pzSponsor" element = { <PzSponsors />} />
        <Route path = "/signin" element = { <Signin />} />
        <Route path = "/registration" element = { <Registration />} />
        <Route path = "/adminNavbar" element = { <AdminNavbar />} />
        <Route path = "/adminSidebar" element = { <AdminSidebar />} />
        <Route path = "/adminhome" element = { <Adminhome />} />
        <Route path = "/adminFooter" element = { <AdminFooter />} />
        <Route path = "/AdminDeshbord" element = { <AdminDeshbord />} />
        <Route path = "/table" element = { <Table />} />
        <Route path = "/adminSlider" element = { <AdminSlider />} />
        <Route path = "/addDonner" element = { <AddDonner />} />
        <Route path = "/mangeDonner" element = { <MangeDonner />} />
        <Route path = "/addDonnetion" element = { <AddDonnetion />} />
        <Route path = "/manageDonnetion" element = { <ManageDonnetion />} />
        <Route path = "/addVolunteer" element = { <AddVolunteer />} />
        <Route path = "/addUser" element = { <AddUser />} />
        <Route path = "/manageUser" element = { <ManageUser />} />
        <Route path = "/manageVolunteer" element = { <ManageVolunteer />} />
        

              


              {/* <Route path = "/map" element = { <Map/>} /> */}
      </Routes>
       {/* <Footer/> */}

    </Router>
    </>

  );
};

export default App;