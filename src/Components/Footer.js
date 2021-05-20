import React from 'react';
import '../styles/footer.css';
import '../styles/main.css';
import InputField from './InputField';


function Footer(props) {

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
