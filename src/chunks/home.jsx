import * as React from 'react';

import portrait from '../assets/images/portrait.png';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import itchIcon from '../assets/icons/itch.svg';

function Home(props) {
    return (
        <div {...props} className="page">
            <div className="window welcome outline shadow">
                <div className="header">Welcome</div>

                <div className="content">
                    <div className="image outline">
                        <img src={portrait} alt='portrait' />
                    </div>

                    <div className="description">
                        <div className="title">Hey there,<br/> I'm Andrew Burke</div>

                        <div className='socials'>
                            <a href='https://github.com/nomnomab' target='new'><img src={githubIcon} alt="github" /></a>
                            <a href='https://www.linkedin.com/in/andrew-burke-675337167/' target='new'><img src={linkedinIcon} alt="linkedin" /></a>
                            <a href='https://nomnomdev.itch.io/' target='new'><img src={itchIcon} alt="itch" /></a>
                        </div>

                        <p>
                        I am a game designer, tools engineer, and web developer who works on various projects to acquire knowledge and experience.
                        <br/><br/>
                        From horror games, to tools that make debugging easier and less painful, I pursue many avenues.
                        <br/><br/>
                        Want to see what I’ve done?
                        </p>
                    </div>

                    <div className="buttons">
                        <button className="no">no</button>
                        <a href="/#projects">
                        <button>ok</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;