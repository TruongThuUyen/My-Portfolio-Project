import { useState } from 'react';
import { Dialog } from '../dialog/Dialog';
import './styled.css';

const projectList = [
  {
    id: 1,
    name: 'Project',
    description:
      'A personal portfolio website built with React and Tailwind CSS, focusing on performance optimization and interactive UI/UX design.',
    imageUrl:
      'https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwZmxvd2VyfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000',
    time: '03/2025',
    timeEnd: '03/2025',
    webLink: 'https://github.com/',
    githubLink: 'https://github.com/',
  },
  {
    id: 2,
    name: 'Portfolio Frontend Project',
    description:
      'A personal portfolio website built with React and Tailwind CSS, focusing on performance optimization and interactive UI/UX design.',
    imageUrl:
      'https://media.istockphoto.com/id/2196545732/photo/cosmos-blooming-in-a-park.jpg?s=612x612&w=0&k=20&c=f4j4ARFK17AWviTM0ubzdQdO3EsYwD1IqZ0mt-cy_rw=',
    time: '10/2025',
    timeEnd: '03/2025',
    webLink: 'https://github.com/',
    githubLink: 'https://github.com/',
  },
  {
    id: 3,
    name: 'Film Info Project',
    description:
      'A movie information website clone developed with ReactJS and SCSS to practice integrating RESTful APIs and working with a NodeJS backend. The project is hosted on GitHub.',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5aLWFQj1HAPxf_I8PU3GF4euRUz8yw4mRYftNGiT6zeHT5PiqE4uRB28EqBuJaROatS0&usqp=CAU',
    time: '2022',
    timeEnd: '03/2025',
    webLink: 'https://github.com/',
    githubLink: 'https://github.com/',
  },
  {
    id: 4,
    name: 'Social Media Project',
    description:
      'A social media practice project developed with ReactJS, RESTful APIs, and Firebase, focusing on frontend logic and responsive UI design.',
    imageUrl:
      'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonaskakaroto-736230.jpg&fm=jpg',
    time: '2022',
    timeEnd: '03/2025',
    webLink: 'https://github.com/',
    githubLink: 'https://github.com/',
  },
];

export default function PersonalProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const showDialog = (id) => {
    const project = projectList.find((p) => p.id === id);
    setSelectedProject(project);
  };

  const hideDialog = () => {
    setSelectedProject(null);
  };
  return (
    <section className='section-wrapper pt-20 pb-10'>
      <p className='section-title'>Personal Projects</p>
      <div className='project-list flex flex-wrap'>
        {projectList?.map((project) => (
          <div key={project.id} className='project-item relative cursor-pointer overflow-hidden'>
            <div className='overlay'></div>
            <img src={project.imageUrl} alt={project.name} className='project-image' />
            <div className='project-item__content absolute left-0 pl-3 pt-4 text-center'>
              <h4 className=' text-md lg:text-xl text-[var(--color-primary-green)] font-bold capitalize'>
                {project.name}
              </h4>
              <p className='py-1 text-xs font-bold'>
                {project.time} - {project.timeEnd}
              </p>

              <button
                onClick={() => showDialog(project.id)}
                className='outline-none border-none text-[13px] lg:text-sm my-2 cursor-pointer hover:cursor-pointer hover:text-[var(--color-primary-green)] hover:underline transform transition-all duration-300'>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {!!selectedProject && <Dialog project={selectedProject} onClose={() => hideDialog()} />}
    </section>
  );
}
