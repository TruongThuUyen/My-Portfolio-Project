import '@/styles/loading.css';

export default function Loading() {
  return (
    <div className='flex items-center justify-center w-full h-screen '>
      <h1
        className='relative text-4xl sm:text-7xl font-extrabold text-[rgba(40, 44, 52, 0.8)]
             m-0'
        data-text='Welcome'>
        Welcome
      </h1>
    </div>
  );
}
