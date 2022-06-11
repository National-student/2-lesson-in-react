import './hader.scss';
const Header = () => {
    return (
        <>
            <div className="container"> 

            <div className='header'>
        <a href="#" className='header__logo'>
          <img src='https://picsum.photos/266/44' alt="logo" width={266} height={44} />
        </a>

        <ul className='header__list'>
          <li className='list__item'>
            <a className='item__link' href='#'>Home</a>
          </li>
          <li className='list__item'>
            <a className='item__link' href='#'>Testimonials</a>
          </li>
          <li className='list__item'>
            <a className='item__link' href='#'>Find a doctor</a>
          </li>
          <li className='list__item'>
            <a className='item__link' href='#'>Apps</a>
          </li>
          <li className='list__item'>
            <a className='item__link' href='#'>About us</a>
          </li>
        </ul>

        <form className="row g-3 header__form" >
          <div className="col-auto">
            <input type="Text" className="form-control" id="inputPassword2" placeholder="Search" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">Search</button>
          </div>
        </form>
      </div>    

            </div>
        </>
    )
}

export default Header
