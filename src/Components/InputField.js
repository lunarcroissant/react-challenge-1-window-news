import React from 'react';
import '../styles/footer.css';


function InputField(props) {
  // const { labelName, headingLevel } = this.props;
  // const Title = headingLevel;
  return (
    <h3 className="footer__formInput">
      <label for="subscribe" className="footer__resourceItem">{props.label}</label>
      <input name="subscribe" alt="Enter email here to subscribe to the mailing list of Window News" placeholder="Enter email" className="footer__resourceItem footer__input"></input>
    </h3>

  );
}

export default InputField;