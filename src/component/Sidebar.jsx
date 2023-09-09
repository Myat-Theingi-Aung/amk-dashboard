import store from '../img/store.avif';
import '../scss/sidebar.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import $ from 'jquery';

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
    <div className="bg-primary ps-3 min-height-100" >
      {/* <div className='position-relative vh-100'> */}
        {/* <div className="row">
          <div className="col-12">
            <h1 className="text-center py-2 border-bottom">
              <a className="text-white text-decoration-none" href="/">AMK</a>
            </h1>
          </div>
        </div> */}
        <div className="row pt-4 sticky-top bg-primary shadow-lg">
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
        <div className="row pt-4 d-flex flex-column">
          <div className="col-12 pe-0">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink to="/" className={({isActive}) => (isActive? "active nav-link text-uppercase fw-bold" : "nav-link text-uppercase fw-bold")}>
                  <i className='bx bx-home me-3'></i>
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/home" className={({isActive}) => (isActive? "active nav-link text-uppercase fw-bold" : "nav-link text-uppercase fw-bold")}>
                  <FontAwesomeIcon icon="fa-solid fa-list-check" className='me-3' />
                  Daily payments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/daily-sales" className={({isActive}) => (isActive? "active nav-link text-uppercase fw-bold" : "nav-link text-uppercase fw-bold")}>
                  <FontAwesomeIcon icon="fa-solid fa-list-ol" className='me-3' />
                  Daily Sales
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category/types" className={({isActive}) => (isActive? "active nav-link text-uppercase fw-bold" : "nav-link text-uppercase fw-bold")}>
                  <i className='bx bx-category-alt me-3'></i>
                  Category Types
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="categories" className={({isActive}) => (isActive? "active nav-link text-uppercase fw-bold" : "nav-link text-uppercase fw-bold")}>
                  <i className='bx bx-category me-3' ></i>
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/colors" className={({isActive}) => (isActive? "active nav-link text-uppercase fw-bold" : "nav-link text-uppercase fw-bold")}>
                  <i className='bx bxs-color me-3' ></i>
                  Colors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className={({isActive}) => (isActive? "active nav-link text-uppercase fw-bold" : "nav-link text-uppercase fw-bold")}>
                  <i className='bx bxs-package me-3'></i>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/logout" className={({isActive}) => (isActive? "active nav-link text-uppercase fw-bold" : "nav-link text-uppercase fw-bold")}>
                  <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" className='me-3' />
                  Logout
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/one" className={({isActive}) => (isActive? "active nav-link text-uppercase fw-bold" : "nav-link text-uppercase fw-bold")}>
                  <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" className='me-3' />
                  One
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/two" className={({isActive}) => (isActive? "active nav-link text-uppercase fw-bold" : "nav-link text-uppercase fw-bold")}>
                  <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" className='me-3' />
                  Two
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/three" className={({isActive}) => (isActive? "active nav-link text-uppercase fw-bold" : "nav-link text-uppercase fw-bold")}>
                  <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" className='me-3' />
                  Three
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/four" className={({isActive}) => (isActive? "active nav-link text-uppercase fw-bold" : "nav-link text-uppercase fw-bold")}>
                  <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" className='me-3' />
                  Four
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className='mt-2 white-gray pe-3'>
              <FontAwesomeIcon icon="fa-solid fa-location-arrow" className='me-3' />
              <span>Bayin Naung Street, Sidaw Mingalar Ward, Pyay</span>
            </p>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}
