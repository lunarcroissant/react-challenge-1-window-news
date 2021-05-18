import './header.css';
import WindowNewsLogo from './assets/WindowNewsLogo';

function Logo() {
  // const { headingLevel } = this.props;
  // const Title = headingLevel;
  return (
    <div class="header__logo">
      {/* <img alt='Window News Logo' className="header__logoSVG" src={logo}></img> */}
      <WindowNewsLogo />
      <h1><span className='mediumText'>WINDOW<br></br>NEWS</span></h1>
    </div>
  );
}


export default Logo;