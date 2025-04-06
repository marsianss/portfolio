function Portfolio() {
const projects = [
    { id: 1, title: 'Project Title 1', description: 'Project description 1.', thumbnail: 'placeholder1.png' },
    { id: 2, title: 'Project Title 2', description: 'Project description 2.', thumbnail: 'placeholder2.png' },
    { id: 3, title: 'Project Title 3', description: 'Project description 3.', thumbnail: 'placeholder3.png' },
    { id: 4, title: 'Project Title 4', description: 'Project description 4.', thumbnail: 'placeholder4.png' },
];

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-box">
            <img src={project.thumbnail} alt={`${project.title} Thumbnail`} className="project-thumbnail" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;