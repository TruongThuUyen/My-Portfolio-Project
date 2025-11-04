import { useCallback, useEffect, useState } from 'react';
import GoKartsImage from '../../../public/images/go-kart.png';
import PersonalPorfolioImage from '../../../public/images/personal-portfolio.png';
import DefaultThumbnail from '../../../public/images/thumbnail.png';
import SocialMediaImage from '../../../public/images/yt.png';
import { Dialog } from '../dialog/Dialog';
import './styled.css';

const projectList = [
  {
    id: 1,
    name: 'Portfolio Frontend Project',
    description:
      'A personal portfolio website built with React and Tailwind CSS, focusing on performance optimization and interactive UI/UX design.',
    imageUrl: PersonalPorfolioImage,
    time: '10/2025',
    timeEnd: null,
    webLink: 'https://github.com/',
    githubLink: 'https://github.com/',
  },
  {
    id: 2,
    name: 'Go Kart Landing',
    description:
      'A website built using pure HTML, native JavaScript, and Tailwind CSS. It notably utilizes the CSS clip-path technique to create custom shapes and geometric effects instead of relying on static, pre-made images',
    imageUrl: GoKartsImage,
    time: '03/2025',
    timeEnd: null,
    webLink: 'https://github.com/',
    githubLink: 'https://github.com/',
  },
  {
    id: 3,
    name: 'Film Info Project',
    description:
      'A movie information website clone developed with ReactJS and SCSS to practice integrating RESTful APIs and working with a NodeJS backend. The project is hosted on GitHub.',
    imageUrl: SocialMediaImage,
    time: '2022',
    timeEnd: '03/2025',
    webLink: '',
    githubLink: 'https://github.com/',
  },
  {
    id: 4,
    name: 'Social Media Project',
    description:
      'A social media practice project developed with ReactJS, RESTful APIs, and Firebase, focusing on frontend logic and responsive UI design.',
    imageUrl: '',
    time: '2022',
    timeEnd: '03/2025',
    webLink: '',
    githubLink: 'https://github.com/',
  },
];

export default function PersonalProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  console.log(projectList);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectTitle = document.querySelectorAll('.project-title');
    observer.observe(projectTitle[0]);

    return () => observer.disconnect();
  }, []);

  const showDialog = (id) => {
    const project = projectList.find((p) => p.id === id);
    setSelectedProject(project);
  };

  const hideDialog = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section id='projects' className='section-wrapper pt-20 pb-10'>
      <p className='section-title max-h-9 overflow-hidden'>
        <span className='project-title inline-block'>Personal Projects</span>
      </p>
      <div className='project-list flex flex-wrap'>
        {projectList?.map((project) => (
          <div key={project.id} className='project-item relative cursor-pointer overflow-hidden'>
            <div className='overlay'></div>
            <img
              src={project.imageUrl.src || DefaultThumbnail.src}
              alt={project.name}
              className='project-image'
            />
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
