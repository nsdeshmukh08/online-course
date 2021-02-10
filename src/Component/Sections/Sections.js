import React from 'react';
import Card from "./Card";

import './Sections.css';

const Sections = ({sections}) => {
    return ( 
        <div className='sections'>
            {sections.map((cardInfo) => <Card {...cardInfo}/>)}
        </div>
    );
}
 
export default Sections;