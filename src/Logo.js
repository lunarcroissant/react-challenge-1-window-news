import logo from './static/WindowNewsLogo.svg';
import './header.css';

function Logo() {
  // const { headingLevel } = this.props;
  // const Title = headingLevel;
  return (
    <div class="header__logo">
      <img className="header__logoSVG" src={logo}></img>
      <h5><span className='mediumText'>WINDOW<br></br>NEWS</span></h5>
    </div>
  );
}


export default Logo;