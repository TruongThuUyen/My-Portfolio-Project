'use client';
import { useEffect, useState } from 'react';
import Loading from './loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=''>
      <Loading />
    </div>
  );
}
