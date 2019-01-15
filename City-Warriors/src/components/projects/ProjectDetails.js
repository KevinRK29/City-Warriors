import React from 'react'

const ProjectDetails = (props) => {
    const id =props.match.params.id;
    return (
    <div className="container section project-details">
        <div className="card z-depth-0">
                <div className='card-content'>
                    <span className="card-title"><b>Project Title-{id}</b></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut velit quidem ducimus iste quas expedita, officia laboriosam voluptates? Voluptate deleniti aliquid libero explicabo cum non, ratione odio fugit neque odit?</p>
                </div>
            <div className="card-action grey lighten-4 black-text">
                <div>Posted by Ganesh Rajasekar</div>
                <div>On Jan 12th,2018 11pm</div>

            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
