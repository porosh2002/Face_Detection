import React, { Component } from 'react';
import './Navigation.css';
import avatar from './Image/avatar.png'
class Navigation extends Component{
render(){
  return(
<div className='nav w-100'>
      <p className='logo f2'>{'FACE'}</p>
      <img className='avatar dim' alt='avatar' src={avatar}></img>
</div>
  );
}
}


export default Navigation;
