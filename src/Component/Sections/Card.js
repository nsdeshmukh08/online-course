import React from 'react';
import Person from '../../Assets/person.svg';
import Chart from '../../Assets/chart.svg';

import './Card.css';

const Card = ({id, title, type, line1, line2}) => {
    const icon = title === 'Students'? Person : Chart;
    return (
        <div className="card" key={id}>
            <div className="ellipse">
                <img className="person_icon" src={icon}/>
            </div>
            <div className="title_count">
                <div className="line">{line1} {line2 && line2}</div>
                <div className="title">{title}</div>
            </div>
        </div>
    );
}
 
export default Card;