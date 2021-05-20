import Logo from './Logo';
import '../styles/header.css';
import Nav from './Nav';
import Utilities from './Utilities';

function Header() {
  return (

    <header className="header centred">

      <Logo />
      <Nav />
      <Utilities />

    </header>

  );

}

export default Header;