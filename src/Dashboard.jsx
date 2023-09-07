import Footer from "./component/Footer";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

export default function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 bg-primary">
          <Sidebar />
        </div>
        <div className="col-10 bg-light pt-4">
          <Header title="Dashboard" />
          <div className="row d-flex flex-column" style={{ minHeight: '81vh' }}>
            
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
