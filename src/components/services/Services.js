'use client';
import { useEffect } from 'react';
import './styled.css';

const serviceList = [
  {
    id: 1,
    title: 'Frontend Development',
    description:
      'Building responsive, high-performance web applications using ReactJS, JavaScript, and TypeScript, as well as frameworks like Next.js and Vue.js.',
  },

  {
    id: 2,
    title: 'Power Platform Solutions',
    description:
      'Creating low-code business apps and automating workflows using Power Apps, Power Automate, and Power Pages.',
  },

  {
    id: 3,
    title: ' Backend & Integration Fundamentals',
    description:
      'Having foundational knowledge of Java and MongoDB, and a solid understanding of working with APIs and RESTful APIs to handle data flow and frontend–backend integration.',
  },
];

export default function ServicesSection() {
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

    const liElements = document.querySelectorAll('.my-services__list-item');
    const titleEl = document.querySelectorAll('.my-services__sub-title');
    liElements.forEach((el) => observer.observe(el));

    observer.observe(titleEl[0]);

    return () => observer.disconnect();
  }, []);

  return (
    <section id='services' className='section-wrapper pt-20 pb-10'>
      <p className='section-title text-center'>My services</p>
      <h2 className='my-services__sub-title text-3xl md:text-5xl font-medium text-center text-[var(--text-secondary-color)] max-w-[1024px] mx-auto'>
        Transforming ideas into robust solutions with code and platform innovation.
      </h2>
      <ul className='my-service__list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
        {serviceList?.map((service) => (
          <li
            key={service.id}
            className='my-services__list-item relative px-10 py-5 md:py-10 lg:py-12 sm:py-20 border-2 border-[var(--color-primary-green)] text-[var(--text-primary-color)]'>
            <p className='mt-8 mb-4 text-md sm:text-xl uppercase text-center text-[var(--text-secondary-color)]'>
              {service.title}
            </p>
            <span className='text-sm break-words'>{service.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
