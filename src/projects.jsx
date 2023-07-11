import React from 'react';

function Projects(props) {
    const ProjectListItems = props.Projects.map((project, index) => {
        return (

            <li key={index}>
                { project.name }
            </li>
        );
    });

    return (
        <ul>
            { ProjectListItems }
        </ul>
    );
}

export default Projects;