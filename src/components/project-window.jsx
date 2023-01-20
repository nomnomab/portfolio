import * as React from 'react';
import './project-window.css';

import chevronLeftIcon from '../assets/images/chevron-left.png';
import chevronRightIcon from '../assets/images/chevron-right.png';

import unityIcon from '../assets/icons/unity.svg';
import csharpIcon from '../assets/icons/csharp.svg';
import githubIcon from '../assets/icons/github.svg';
import itchIcon from '../assets/icons/itch.svg';

const types = {
    'unity': unityIcon,
    'c#': csharpIcon,
    'github': githubIcon,
    'itch': itchIcon,
}

function ProjectWindow({project, setProject, onPrevious, onNext, ...props}) {
    const data = project.value;

    return (
        <div {...props} id="project-window" className="window welcome project-app outline shadow">
            <div className="header">
                <div className='top'>
                    <button className='close' onClick={() => setProject(null)} />
                    <p>{data.id}.app</p>

                    <button onClick={() => onPrevious()}>
                        <img src={chevronLeftIcon} alt="previous" />
                    </button>

                    <button onClick={() => onNext()}>
                        <img src={chevronRightIcon} alt="next" />
                    </button>
                </div>
            </div>

            <div className="content">
                <div className="image outline">
                    <img src={data.preview} alt='portrait' />
                </div>

                <div className="description">
                    <div className="title">{data.name}</div>
                    <div className="price">{data.price}</div>

                    <p dangerouslySetInnerHTML={{__html: data.description}}></p>

                    <div className='using'>
                        { data.types && data.types.map((x, i) => <img key={i} src={types[x]} alt={x} />)}
                    </div>
                </div>

                <div className="buttons">
                    <a href={data.link} target='new'><button>{data.srcText}</button></a>
                    <a href="#projects">
                        <button onClick={() => setProject(null)}>go back</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectWindow;