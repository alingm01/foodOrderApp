import logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo} alt="title logo" />
        <h1>REACTFOOD</h1>
      </div>
      <nav >
        <button className='text-button'>
          Cart (4)
        </button>
      </nav>
    </header>    
  )
}

export default Header;