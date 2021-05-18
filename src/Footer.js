import React from 'react';
import './footer.css';
import './main.css';
import InputField from './InputField.js';


function Footer(props) {
  // const { headingLevel } = this.props;
  // const Title = headingLevel;
  // const labelName = 'Newsletter';

  const footerLinks = ['Data Policy', 'Careers', 'Sign up to our latest updates'];

  return (
    <footer className="footer centred">

      <div className="footer__resources">
        <a href="#" className="footer__resourceItem">{footerLinks[0]}</a>
        <a href="#" className="footer__resourceItem">{footerLinks[1]}</a>
        <InputField label={footerLinks[2]} />
      </div>
      <a className="footer__copyright">{props.footerText}</a>


    </footer >

  );
}

export default Footer;
