import React from 'react';
import './footer.css';


function InputField(props) {
  // const { labelName, headingLevel } = this.props;
  // const Title = headingLevel;
  return (
    <h5 className="footer__formInput">
      <label className="footer__resourceItem">{props.label}</label>
      <input placeholder="Enter email" className="footer__resourceItem footer__input"></input>
    </h5>

  );
}

export default InputField;