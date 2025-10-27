'use-client';
import { ExternalLink, Minimize2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import './styled.css';

export const Dialog = React.memo(({ project, onClose }) => {
  console.log(project);
  return (
    <div className='dialog fixed inset-0 z-1 bg-black/40 flex justify-center items-center transform '>
      <div
        className={`dialog-container absolute w-[76%] md:w-[60%] py-4 px-6 bg-[var(--color-surface-secondary)] 
        rounded-xl overflow-hidden text-black ${!!project ? 'active' : 'close'}`}>
        <div onClick={() => onClose()}>
          <Minimize2 className='absolute top-2 right-2 cursor-pointer text-[var(--text-primary-color)] hover:text-[var(--color-primary-green)] transform ease-in duration-100' />
        </div>
        <h4 className='mt-3 mb-1 text-xl md:text-2xl text-center text-[var(--color-primary-green)] font-bold capitalize'>
          {project.name}
        </h4>
        <p className='py-1 text-center text-xs font-bold text-white'>
          {project.time} - {project.timeEnd}
        </p>
        <p className='my-4 text-[13px] sm:text-sm text-[var(--text-primary-color)] overflow-hidden leading-tight'>
          {project.description}
        </p>
        <p className='flex gap-2 items-center text-white my-2'>
          <span>
            <ExternalLink className='size-4' />
          </span>
          <Link
            href={project.githubLink}
            className='text-sm text-[var(--color-primary-green)] hover:text-[var(--text-primary-color)] hover:underline transform ease-in duration-200'>
            Git hub
          </Link>
        </p>
        <p className='flex gap-2 items-center text-white my-2'>
          <span>
            <ExternalLink className='size-4' />
          </span>
          <Link
            href={project.webLink}
            className='text-sm text-[var(--color-primary-green)] hover:text-[var(--text-primary-color)] hover:underline transform ease-in duration-200'>
            Web Link
          </Link>
        </p>
      </div>
    </div>
  );
});
