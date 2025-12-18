import './App.css';
import Nav from './Nav';

function Header() {
  return (
    <header className='header'>
      <div className='header-inner'>
        <div className='logo'>
          <img src="/assets/logo.svg" alt="Little Lemon logo" />
        </div>
        <Nav />
      </div>
    </header>

    // <header className='nav-bar'>
    //   <img src="/assets/logo.svg" alt="Little Lemon logo" />
    //   <Nav />
    // </header>
  );
}

export default Header;