import React from 'react';
import './footer.css';
import './main.css';
import InputField from './InputField.js';


function Footer(props) {
  // const { headingLevel } = this.props;
  // const Title = headingLevel;
  // const labelName = 'Newsletter';

  const givenLabel = 'Our newsletter';
  const footerLinks = ['Data Policy', 'Careers', 'Sign up to our latest updates']

  return (
    <div className="footer centred">

      <div className="footer__resources">
        <h5 className="footer__resourceItem">{footerLinks[0]}</h5>
        <h5 className="footer__resourceItem">{footerLinks[1]}</h5>
        <InputField label={footerLinks[2]} />
      </div>
      <h5 className="footer__copyright">{props.footerText}</h5>


    </div >

  );
}

export default Footer;
