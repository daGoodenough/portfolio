import ProjectListItem from './ProjectListItem';

const ProjectList = () => {
  const projects = [
    'News Sifter',
    'Trello-Clone',
    'Goodenough Underground',
    'DaGoodenough Podcasts',
  ];

  return (
    <>
      {projects.map((project, index) => {
        console.log('Title: ', project);
        return <ProjectListItem key={index} id={project} />;
      })}
    </>
  );
};

export default ProjectList;
