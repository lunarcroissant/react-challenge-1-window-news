import React from 'react';
import '../CSS/main.scss';


// HEADER

function Header(props) {
  return (

    <div className="header centred">
      <Logo />
      <Nav />
      <Utilities />

    </div>

  );

}

function Logo(props) {
  const { headingLevel } = this.props;
  const Title = headingLevel;
  return (
    <div class="header__logo">
      <svg className="header__logoSVG"></svg>
      <Title>WINDOW<br></br>NEWS</Title>
    </div>
  );
}

function Nav(props) {
  return (
    <nav className="header__nav">
      <NavLink />
      <NavLink />
      <NavLink />
    </nav>
  );
}

function NavLink(props) {
  return (
    <a class="header__navLink"></a>
  );

}

function Utilities(props) {
  return (
    <div className="header__utilities">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.978 26.2581C28.2057 26.4858 28.3336 26.7946 28.3336 27.1166C28.3336 27.4386 28.2057 27.7474 27.978 27.9751C27.7504 28.2028 27.4415 28.3307 27.1195 28.3307C26.7975 28.3307 26.4887 28.2028 26.261 27.9751L20.2685 21.9826C18.2781 23.5359 15.7702 24.2715 13.2561 24.0394C10.742 23.8073 8.41108 22.625 6.73865 20.7336C5.06621 18.8422 4.17819 16.3841 4.25565 13.8605C4.33311 11.3369 5.37022 8.93786 7.15551 7.15258C8.94079 5.36729 11.3398 4.33018 13.8634 4.25272C16.387 4.17526 18.8451 5.06328 20.7365 6.73572C22.628 8.40815 23.8102 10.7391 24.0423 13.2531C24.2744 15.7672 23.5388 18.2752 21.9855 20.2656L27.978 26.2581ZM14.167 21.2474C16.0456 21.2474 17.8472 20.5011 19.1756 19.1727C20.504 17.8443 21.2503 16.0426 21.2503 14.164C21.2503 12.2854 20.504 10.4837 19.1756 9.15535C17.8472 7.82697 16.0456 7.08069 14.167 7.08069C12.2883 7.08069 10.4867 7.82697 9.15828 9.15535C7.8299 10.4837 7.08362 12.2854 7.08362 14.164C7.08362 16.0426 7.8299 17.8443 9.15828 19.1727C10.4867 20.5011 12.2883 21.2474 14.167 21.2474V21.2474Z"
          fill="#3C3D41" />
      </svg>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
          <path
            d="M10.8801 0.111259C9.85432 0.232294 8.25507 0.716436 7.24037 1.17857C4.08598 2.631 1.78084 5.24977 0.64482 8.64976C-0.0169407 10.6193 -0.160322 12.3358 0.159529 14.4155C0.777172 18.4756 3.25878 21.8426 6.99772 23.6692C9.25874 24.7695 11.3764 25.1766 13.7146 24.9345C18.9866 24.3954 23.266 20.7643 24.6667 15.6368C24.9866 14.4595 25.1079 11.8187 24.8983 10.5203C24.4682 7.82452 23.2109 5.45883 21.2035 3.53326C20.0344 2.41093 19.2513 1.87178 17.7955 1.18958C15.6006 0.166275 13.2624 -0.196831 10.8801 0.111259ZM12.5014 12.5119L12.5014 24.1203H12.2367C11.597 24.1203 9.64477 23.7572 8.85065 23.4931C3.90951 21.8426 0.666879 17.0562 0.953642 11.8847C1.10805 9.24394 1.94628 7.13132 3.66686 5.0297C5.58597 2.68602 9.00506 1.00252 12.005 0.914494L12.5014 0.903491L12.5014 12.5119Z"
            fill="black" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="25" height="25" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>

  );
}

// CARDS

function Card(props) {

  const { title, description, headingLevel } = this.props;
  const Title = headingLevel;
  return (
    <article className="card MarginBottom10vh centred">
      <div className="card__info">
        <Title>{title}</Title>
        <p className="card__subtitle">{description}</p>

        <DateAndReadTime />

      </div>
      <div className="card__image">
        <img src={props.article.imageURL} alt={props.article.name}></img>
      </div>
    </article>
  )
}

const article = {
  article: {
    name: 'Two penguins are celebrating Brads birthday',
    imageURL: 'https://unsplash.com/photos/MvOj8LsFnwI',
  },
};


function DateAndReadTime(props) {
  const { date, readTime, headingLevel } = this.props;
  const Title = headingLevel;
  return (
    <div className="card__facts">
      <Title>{date}</Title>
      <Title>{readTime} mins</Title>
    </div>
  )
}

// Footer 

function Footer(props) {
  const { headingLevel } = this.props;
  const Title = headingLevel;

  return (
    <div className="footer">

      <div className="footer__resources">
        <Title></Title>
        <Title></Title>
        <InputField />
      </div>
      <Title className="footer__copyright"></Title>


    </div>

  )
}

function InputField() {
  const { labelName, headingLevel } = this.props;
  const Title = headingLevel;
  return (
    <Title className="footer__resourceItem">
      <label className="footer__resourceItem">{labelName}</label>
      <input className="footer__resourceItem"></input>
    </Title>

  )
}

ReactDOM.render(
  <Header />
)