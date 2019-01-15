import React from 'react'
import ProjectSummary from './ProjectSummary';

const ProjectLists = () => {
    return (
        <div className="project-list section">
            <div className="project-list section1">
                <span className="section1-title"><b>Road and Transport Issues</b></span>
                <ProjectSummary/>
                <ProjectSummary/>
            </div>
            
            <div className="project-list section2">
            <span className="section2-title"><b>Environmental Issues</b></span>
                <ProjectSummary/>
                <ProjectSummary/>
            </div>
        </div>
    )
}

export default ProjectLists