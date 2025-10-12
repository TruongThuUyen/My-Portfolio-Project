import '@/styles/loading.css';

export default function Loading() {
  return (
    <div className='flex items-center justify-center w-full h-screen '>
      <section>
        <span
          className='text-4xl sm:text-7xl  font-extrabold 
            text-(--color-primary-green)'>
          Welcome
        </span>
      </section>
      <div className='light'></div>
    </div>
  );
}
