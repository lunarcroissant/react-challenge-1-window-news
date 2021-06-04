import React from 'react';
import '../styles/footer.css';


function InputField(props) {
  // const { labelName, headingLevel } = this.props;
  // const Title = headingLevel;
  return (
    <h3 className="footer__formInput">
      <label for="Mailing list subscription" className="footer__resourceItem">{props.label}</label>
      <input name="subscribe" id="Mailing list subscription" aria-label="Enter email here to subscribe to the mailing list of Window News" alt="Input for email to Window News mailing list" placeholder="Enter email" className="footer__resourceItem footer__input"></input>
    </h3>

  );
}

export default InputField;