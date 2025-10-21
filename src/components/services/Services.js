'use client';
import { useEffect } from 'react';
import './styled.css';
import { WavyText } from '../wavyText/Wavytext';

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

    const liElements = document.querySelectorAll('.my-service__list-item');
    const titleEl = document.querySelectorAll('.services-title');
    liElements.forEach((el) => observer.observe(el));

    observer.observe(titleEl[0]);

    return () => observer.disconnect();
  }, []);

  return (
    <div className='section-wrapper pt-20 pb-10'>
      <p className='section-title text-center'>My services</p>
      <h2 className='services-title text-3xl md:text-5xl font-medium text-center text-[var(--text-secondary-color)] max-w-[1024px] mx-auto '>
        Transforming ideas into robust solutions with code and platform innovation.
      </h2>
      <ul className='my-service__list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
        <li className='my-service__list-item  relative px-10 md:py-10 lg:py-12 sm:py-20 border-2 border-[var(--color-primary-green)] text-[var(--text-primary-color)]'>
          <p className='mt-8 mb-4 text-md sm:text-xl uppercase text-center text-[var(--text-secondary-color)]'>
            Frontend Development
          </p>
          <span className='text-sm break-words'>
            Building responsive, high-performance web applications using ReactJS, JavaScript, and
            TypeScript, as well as frameworks like Next.js and Vue.js.
          </span>
        </li>
        <li className='my-service__list-item relative px-10 md:py-10 lg:py-12 sm:py-20 border-2 border-[var(--color-primary-green)] text-[var(--text-primary-color)]'>
          <p className='mt-8 mb-4 text-md sm:text-xl uppercase text-center text-[var(--text-secondary-color)]'>
            Power Platform Solutions
          </p>
          <span className='text-sm break-words'>
            Creating low-code business apps and automating workflows using Power Apps, Power
            Automate, and Power Pages.
          </span>
        </li>
        <li className='my-service__list-item relative px-10 md:py-10 lg:py-12 sm:py-20 border-2 border-[var(--color-primary-green)] text-[var(--text-primary-color)]'>
          <p className='mt-8 mb-4 text-md sm:text-xl uppercase text-center text-[var(--text-secondary-color)]'>
            Backend & Integration Fundamentals
          </p>
          <span className='text-sm break-words'>
            Having foundational knowledge of Java and MongoDB, and a solid understanding of working
            with APIs and RESTful APIs to handle data flow and frontend–backend integration.
          </span>
        </li>
      </ul>
    </div>
  );
}
