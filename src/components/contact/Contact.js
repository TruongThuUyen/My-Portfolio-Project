import { LocateIcon, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className='section-wrapper pt-[60px] pb-10'>
      <ul className='flex flex-col lg:flex-row justify-evenly items-center gap-8'>
        <li className='flex items-center gap-5'>
          <i className='py-4 sm:py-5 px-4 sm:px-5 bg-[var(--color-primary-green)] rounded-[50%]'>
            <LocateIcon className='size-6 sm:size-7 text-black' />
          </i>
          <div className='flex flex-col gap-1 text-[var(--text-primary-color)]'>
            <p className='font-bold text-white text-md sm:text-xl'>Address</p>
            <div>
              <p className='text-sm'>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
            </div>
          </div>
        </li>
        <li className='flex items-center gap-5'>
          <i className='py-4 sm:py-5 px-4 sm:px-5 bg-[var(--color-primary-green)] rounded-[50%]'>
            <Mail className='size-6 sm:size-7 text-black' />
          </i>
          <div className='flex flex-col gap-1 text-[var(--text-primary-color)]'>
            <p className='font-bold text-white text-md sm:text-xl'>Email</p>
            <div>
              <p className='text-sm hover:cursor-pointer hover:text-[var(--color-primary-green)] transition-color duration-200'>
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </p>
            </div>
          </div>
        </li>
        <li className='flex items-center gap-5'>
          <i className='py-4 sm:py-5 px-4 sm:px-5 bg-[var(--color-primary-green)] rounded-[50%]'>
            <Phone className='size-6 sm:size-7 text-black' />
          </i>
          <div className='flex flex-col gap-1 text-[var(--text-primary-color)]'>
            <p className='font-bold text-white text-md sm:text-xl'>Phone</p>
            <div>
              <p className='text-sm hover:cursor-pointer hover:text-[var(--color-primary-green)] transition-color duration-200'>
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
