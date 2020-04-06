import React from 'react';
import './Button.css';
const Button = ({onclick_btn})=> <button className='tc btn dim' onClick={onclick_btn}>{'Detect'}</button>
export default Button;