import Footer from "./component/Footer";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import React from "react";

export default function Four(){
  return(
    <div className="container-fluid" style={{ minHeight: '100vh' }}>
      <div className="row">
        <div className="col-2 bg-primary sidebar">
          <Sidebar />
        </div>
        <div className="col-10 bg-light pt-4 content d-flex flex-column min-vh-100">
          <Header title="Dashboard" />
          <div>
            <p>Four Page</p>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
