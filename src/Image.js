import React from "react";
import './Image.css'
const Image=({imageURL,box})=>{
return(
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageURL} width='500px' heigh='auto'/>
        {box.map(box=>{
          return <div key={box.topRow} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        })}
      </div>
    </div>
);
}
export default Image;
