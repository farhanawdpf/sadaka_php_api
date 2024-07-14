import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Mission2 = () => {
    return (
        <div>
            <Navbar/>
            <>
  {/* Hello world */}
  <div className="page-heading text-center">
    <div className="container zoomIn animated">
      <h1 className="page-title">
        OUR MISSION <span className="title-under" />
      </h1>
      <p className="page-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit Necessitatibus.
      </p>
    </div>
  </div>
  <div className="main-container">
    <div className="container">
      <div className="row">
       
        <div className="col-md-12 fadeIn animated">
          <div
            id="cause-carousel"
            className="carousel slide cause-carousel"
            data-ride="carousel"
          >
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li
                data-target="#cause-carousel"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#cause-carousel" data-slide-to={1} />
            </ol>
            {/* Wrapper for slides */}
            <div className="carousel-inner" role="listbox">
              <div className="item ">
                <img
                  src="assets/images/causes/slider/cause-slider-1.jpg"
                  alt=""
                />
              </div>
              <div className="item active">
                <img
                  src="assets/images/causes/slider/cause-slider-2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row fadeIn animated">
        <div className="col-md-6">
          <h2 className="title-style-2">
            {" "}
            Cause sub title <span className="title-under" />
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="col-md-6">
          <h2 className="title-style-2">
            {" "}
            Cause sub title <span className="title-under" />
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-12 fadeIn animate-onscroll">
          <h2 className="title-style-2">
            {" "}
            Tabs <span className="title-under" />
          </h2>
          <div role="tabpanel">
            {/* Nav tabs */}
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active">
                <a
                  href="#home"
                  aria-controls="home"
                  role="tab"
                  data-toggle="tab"
                >
                  Home
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#profile"
                  aria-controls="profile"
                  role="tab"
                  data-toggle="tab"
                >
                  Profile
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#messages"
                  aria-controls="messages"
                  role="tab"
                  data-toggle="tab"
                >
                  Messages
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#settings"
                  aria-controls="settings"
                  role="tab"
                  data-toggle="tab"
                >
                  Settings
                </a>
              </li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="home">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                consequatur mollitia, libero quisquam impedit obcaecati,
                dignissimos, eum similique minima ab amet eos sequi distinctio
                qui modi? Possimus quos, fugit quia.
              </div>
              <div role="tabpanel" className="tab-pane" id="profile">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae aut culpa a commodi. Quidem asperiores aliquid sequi
                incidunt quas soluta eum ab fugiat deleniti in at iste, illum
                ipsam nisi.
              </div>
              <div role="tabpanel" className="tab-pane" id="messages">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                aliquam corrupti quibusdam nostrum, aspernatur iure illo, alias
                vitae, reiciendis culpa explicabo minus iusto ipsum cum tempore
                incidunt iste praesentium nihil.
              </div>
              <div role="tabpanel" className="tab-pane" id="settings">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                ducimus ullam distinctio fugiat voluptates! Vero quis adipisci
                asperiores aliquam ullam doloremque dolor, reprehenderit,
                accusamus nisi ut eveniet quas reiciendis dolore.
              </div>
            </div>
          </div>
          <p />
        </div>
        <div className="col-md-12 fadeIn animate-onscroll">
          <h2 className="title-style-2">
            {" "}
            Accordion <span className="title-under" />
          </h2>
          <div
            className="panel-group"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Collapsible Group Item #1
                  </a>
                </h4>
              </div>
              <div
                id="collapseOne"
                className="panel-collapse collapse in"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTwo">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Collapsible Group Item #2
                  </a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Collapsible Group Item #3
                  </a>
                </h4>
              </div>
              <div
                id="collapseThree"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div className="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
          </div>
          <p />
        </div>
        <div className="col-md-12 fadeIn animate-onscroll">
          <h2 className="title-style-2">
            Tables <span className="title-under" />
          </h2>
          <h4>TABLE STYLE 1</h4>
          <table className="table table-style-1">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <h4>TABLE STYLE 2</h4>
          <table className="table table-style-2">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

</>
<Footer/>
        </div>
    );
};

export default Mission2;