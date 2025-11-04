'use client';

import dynamic from 'next/dynamic';
const SwiperComponent = dynamic(() => import('./FeedBack.js'), { ssr: false });
export default SwiperComponent;
