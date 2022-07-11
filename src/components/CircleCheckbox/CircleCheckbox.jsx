import React from 'react'
import './CircleCheckbox.css';

function CircleCheckbox({checked = false, onCheck}) {

 const checkedStyle = {
    backgroundImage: 'linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
  }


  return (
    <div className={`CircleCheckbox themed-container ${checked && 'checked'}`} onClick={onCheck} >
        {checked && <img src="images/icon-check.svg" alt="" className='CircleCheckbox__check'/>}
        {!checked && <div className="CircleCheckbox__cover"></div> }

    </div>
  ) 
}

export default CircleCheckbox