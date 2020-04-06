import React from "react";
import "tachyons";
import "./Input.css";
const Input=({placeholder,type,name,oninputchange})=><input className="w-70 inpt tc" placeholder={placeholder} type={type} name={name} onChange={oninputchange}/>
export default Input;
