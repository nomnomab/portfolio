import * as React from 'react';
import './experience.css';

import mcdonaldsIcon from '../assets/icons/mcdonalds.svg';
import idIcon from '../assets/images/i-d.png';

function Experience(props) {
    return (
        <div {...props} className="page">
            <Job 
                name="McDonald's" 
                role="Team Lead" 
                year="2018-2020" 
                description="I maintained a working team structure and assisted in maintaining fast delivery of food products." 
                icon={mcdonaldsIcon}
            />

            <Job 
                name="Incandescent Digital" 
                role="Freelance Web Developer" 
                year="2020-2022" 
                description="I helped create websites that utilized backend databases and complex crypto APIs." 
                icon={idIcon}
            />
        </div>
    )
}

function Job({name, year, role, icon, description, ...props}) {
    return (
        <div className="window job outline shadow">
            <div className="header">{year}</div>

            <div className="content">
                <img src={icon} alt='portrait' />
                
                <div className='items'>
                    <div className='name'>{name}</div>
                    <div className='role'>{role}</div>
                    <div className='description'>{description}</div>
                </div>
            </div>
        </div>
    )
}

export default Experience;