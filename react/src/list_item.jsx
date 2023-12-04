import React from "react";
import rightArrow from './assets/right-arrow.png';
import './style.css'

function ListItem({imageSrc, title}){
    return(
    <div className='list-item'>
        <img src={imageSrc} alt="profile" className='list-item-image'/>
        <span className='list-item-name'>{title}</span>
        <img src={rightArrow} alt="the-next-arrow" className='right-arrow'/>
    </div>
    );
}

export default ListItem;