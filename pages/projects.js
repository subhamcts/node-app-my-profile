import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    image: '/images/project1.jpg'
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    image: '/images/project2.jpg'
  }
];

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
