import store from '../img/store.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header({title}) {
  return (
    <div className="row mx-5 border-bottom">
      <div className="col-12">
        <div className='d-flex justify-content-between'>
          <h2 className='text-primary fw-bold'>{ title }</h2>
          <div className='w-50 d-flex justify-content-end'>
            <div className="input-group mb-3 w-50">
              <input type="text" className="form-control blue-light search" aria-describedby="button-addon2" />
              <button className="btn btn-secondary" type="button" id="button-addon2"><i className='bx bx-search-alt-2'></i></button>
            </div>
            <div className='ms-5'>
              <img src={store} className='rounded-circle border-gray shadow' width={'40px'} height={'40px'} alt="main" />
              <FontAwesomeIcon icon="fa-solid fa-envelope" className='ms-4 text-primary' />
              <i className='bx bxs-bell ms-4 text-primary'></i>
              <FontAwesomeIcon icon="fa-solid fa-flag" className='ms-4 text-primary' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
