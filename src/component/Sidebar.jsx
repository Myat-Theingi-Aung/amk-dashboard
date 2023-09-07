import store from '../img/store.avif';
import '../scss/sidebar.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';

export default function Sidebar() {

  // $('body').on('cut copy paste', (event) => event.preventDefault());
  // document.addEventListener('contextmenu', (e) => e.preventDefault());
  // combine one line above two lines
  // $('body').on('cut copy paste', (event) => event.preventDefault()).end().on('contextmenu', (e) => e.preventDefault());

  // function ctrlShiftKey(e, keyCode) {
  //   return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
  // }
  // document.onkeydown = (e) => {
  //   // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  //   if (e.keyCode === 123 || ctrlShiftKey(e, 'I') || ctrlShiftKey(e, 'J') || ctrlShiftKey(e, 'C') || (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)))
  //     return false;
  // };
  return (
    <div className="bg-primary ps-3 vh-100 sticky-top">
      <div className='position-relative vh-100'>
        {/* <div className="row">
          <div className="col-12">
            <h1 className="text-center py-2 border-bottom">
              <a className="text-white text-decoration-none" href="/">AMK</a>
            </h1>
          </div>
        </div> */}
        <div className="row pt-4">
          <div className="col-12">
            {/* <div className='mb-3 d-flex justify-content-center'>
              <img src={store} alt="main" height={'130px'} className='main-img rounded-circle' />
            </div>
            <h1 className='text-white text-center'>AMK Store</h1> */}
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <img src={store} alt="main" height={'50px'} className='border-white shadow rounded-circle' />
              <h3 className='text-white text-center pe-3 m-0'>AMK Store</h3>
            </div>
            {/* <p className='mt-2 white-gray'>
              <i className='bx bx-current-location me-2'></i>
              <span>Bayin Naung Street, Sidaw Mingalar Ward, Pyay</span>
            </p> */}
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-12 pe-0">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link text-uppercase fw-bold" to="/">
                  <i className='bx bx-home me-3'></i>
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link text-uppercase fw-bold" to="/home/test">
                  <FontAwesomeIcon icon="fa-solid fa-list-check" className='me-3' />
                  Daily payments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link text-uppercase fw-bold" to="/daily-sales">
                  <FontAwesomeIcon icon="fa-solid fa-list-ol" className='me-3' />
                  Daily Sales
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link text-uppercase fw-bold" to="/category/types">
                  <i className='bx bx-category-alt me-3'></i>
                  Category Types
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link text-uppercase fw-bold" to="categories">
                  <i className='bx bx-category me-3' ></i>
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link text-uppercase fw-bold" to="/colors">
                  <i className='bx bxs-color me-3' ></i>
                  Colors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link text-uppercase fw-bold" to="/products">
                  <i className='bx bxs-package me-3'></i>
                  Products
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="row position-absolute bottom-0">
          <div className="col-12">
            <p className='mt-2 white-gray pe-3'>
              <i className='bx bx-current-location me-2'></i>
              <span>Bayin Naung Street, Sidaw Mingalar Ward, Pyay</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
