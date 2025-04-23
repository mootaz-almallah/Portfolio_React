import React from 'react';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Projects</h2>
      
      <div className="projects-container">
        <a href="https://ahmadabdelghani02.github.io/HTML_CSS_Solve_task/task_8/Youtube.html" target="_blank" rel="noreferrer">
          <div className="project-box">
            <div className="project-info">
              <h4>Youtube</h4>
              <p>I created a front-end clone of YouTube using HTML, CSS. The design replicates YouTube's modern interface and video thumbnails</p>
            </div>
          </div>
        </a>
        
        <a href="https://ahmadabdelghani02.github.io/HTML_CSS_Solve_task/grid-web/Prodac.html" target="_blank" rel="noreferrer">
          <div className="project-box">
            <div className="project-info">
              <h4>Prodac</h4>
              <p>I developed a responsive front-end for a car sales platform featuring car listings, filtering options, and detailed specifications. The design is user-friendly and visually appealing</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;