'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styled.css';

// Import Swiper styles
import { Quote } from 'lucide-react';
import { useRef } from 'react';
import { Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const feedBackList = [
  {
    id: 1,
    description:
      'Uyên is a hardworking and reliable developer who always completes tasks with great responsibility. She always keeps her promises and follows through on commitments',
  },
  {
    id: 2,
    description: 'She never gives up easily — always tries her best until the goal is achieved.',
  },
  {
    id: 3,
    description:
      'Uyên listens carefully to clients and puts her best effort into delivering what they need. She pays great attention to detail and ensures every request is handled with care.',
  },
  {
    id: 4,
    description:
      'She maintains professionalism by being punctual and strictly following work principles.',
  },
  {
    id: 5,
    description:
      'Uyên is open to feedback and always seeks to improve herself — both in technical skills and work attitude.',
  },
];

export default function FeedBack() {
  // issue: swiper undefined -> save swiper in state to resolve it
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay?.start();
  };

  return (
    <div id='projects' className='section-wrapper pt-10 md:pt-20 pb-10'>
      <h2 className='mb-6 md:mb-10 font-mono font-bold text-center capitalize text-3xl sm:text-4xl md:text-5xl text-[var(--color-primary-green)] '>
        How do people see me?
      </h2>
      <div onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          touchMoveStopPropagation={true}
          modules={[EffectCoverflow, Autoplay]}
          spaceBetween={30}
          freeMode={true}
          className='mySwiper'
          breakpoints={{
            // screen equals or less than 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // screen equals or less than 760px
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}>
          {feedBackList?.map((project) => (
            <SwiperSlide key={project.id}>
              <div className='project__card-item w-full flex border-1 border-[rgba(255, 255, 255, 0.2)] overflow-hidden'>
                <p className='my-4 md:my-5 px-5 pt-5 md:pt-7 text-[13px] md:text-sm text-[var(--text-primary-color)]'>
                  {project.description}
                </p>
                <div className='flex items-end justify-center mx-6 pb-6'>
                  <Quote className='size-7 md:size-9 text-[var(--color-primary-green)] fill-[var(--color-primary-green)]' />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
