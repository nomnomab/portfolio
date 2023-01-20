import * as React from 'react';
import './projects.css';
import ProjectWindow from '../components/project-window';

import folderIcon from '../assets/icons/folder.svg';
import folderFrontIcon from '../assets/icons/folder-front.svg';
import infoIcon from '../assets/icons/info.svg';

const projects = [
    {
        name: "Mental Break" ,
        price: "Free",
        src: require("../assets/images/folders/mental-break.png"),
        link: "https://nomnomdev.itch.io/mental-break",
        types: ['unity', 'c#', 'itch'],
        srcText: 'view on itch',
        description: `An experimental horror game following an isolation ward patient.
        <br/><br/>
        My entry into the creation of horror games and was used to learn cinematics and event-based gameplay situations.`,
        preview: require("../assets/images/previews/mental-break.png")
    },
    {
        name: "Nom-E" ,
        price: "Free",
        src: require("../assets/images/folders/nom-e.png"),
        link: "https://nomnomdev.itch.io/nom-e",
        types: ['unity', 'c#', 'itch'],
        srcText: 'view on itch',
        description: `In this prototype you play as a worker robot who's sole purpose is to collect trash and navigate the environment.`,
        preview: require("../assets/images/previews/nom-e.png")
    },
    {
        name: "Atari 2600 - Breakout" ,
        price: "Free",
        src: require("../assets/images/folders/atari.png"),
        link: "https://nomnomdev.itch.io/atari-breakout",
        types: ['unity', 'c#', 'itch'],
        srcText: 'view on itch',
        description: `A faithful recreation of Breakout on the Atari 2600.`,
        preview: require("../assets/images/previews/atari-2600-breakout.png")
    },
    {
        name: "Into Myth" ,
        price: "Free",
        src: require("../assets/images/folders/into-myth.png"),
        link: "https://nomnomdev.itch.io/into-myth",
        types: ['unity', 'c#', 'itch'],
        srcText: 'view on itch',
        description: `A game about defeating enemies, using dropped lot to unlock upgrades and abilities, and defeating various bosses.`,
        preview: require("../assets/images/previews/into-myth.jpg")
    },
    {
        name: "Raycast Visualization" ,
        price: "Free",
        src: require("../assets/images/folders/raycast.png"),
        link: "https://github.com/nomnomab/RaycastVisualization",
        types: ['unity', 'c#', 'github'],
        srcText: 'view on github',
        description: `This asset allows users to view raycasts as the user fires them, while also replicating the internal Physics API.`,
        preview: require("../assets/images/previews/raycast-visualization.gif")
    }
]

function Projects(props) {
    const [project, setProject] = React.useState(null);
    let previousProject = null;
    let nextProject = null;

    React.useEffect(() => {
        if (project) {
            document.getElementById('projects').scrollIntoView({
                behavior: 'smooth'
              });
        }
    }, [project])

    if (project) {
        previousProject = (project.i - 1) % projects.length;
        if (previousProject < 0) {
            previousProject += projects.length;
        }
        nextProject = (project.i + 1) % projects.length;
    }

    return (
        <div {...props} className='page'>
            <div className='notification outline shadow'>
                <img src={infoIcon} alt="info" />
                <p>Check Folders</p>
                <p>They should have useful information...</p>
            </div>

            <div className='project-list'>
                { projects && projects.map((x, i) => <Folder key={i} project={{value: x, i}} setProject={setProject} i={i} /> )}
            </div>

            { project && (
                <ProjectWindow 
                    project={getData(project)} 
                    setProject={setProject}
                    onPrevious={() => {setProject({value: projects[previousProject], i: previousProject})}}
                    onNext={() => {setProject({value: projects[nextProject], i: nextProject})}}
                />
            ) }
        </div>
    )
}

function Folder({setProject, project, ...props}) {
    return (
        <button {...props} className='folder-root' onClick={() => setProject(project)}>
            <div className='folder'>
                <img src={folderIcon} alt="folder" />
                <img src={project.value.src} alt="folder content" />
                <img src={folderFrontIcon} alt="folder" />
            </div>
            <p>{project.value.name}</p>
        </button>
    )
}

function getData(project) {
    const data = {
        value: {
            ...project.value,
            id: project.value.name.toLowerCase().replace(' ', '-').replace(/\s+/g, '')
        },
        i: project.i
    }

    return data;
}

export default Projects;