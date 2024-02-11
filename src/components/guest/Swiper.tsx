'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Parallax } from 'swiper/modules';
import '@/css/style.css'
import { useMotionValue, useTransform } from 'framer-motion';
import { WorksCard } from './WorksCard';
import { Work } from '@prisma/client';

export function Caroussel({works}:{works: Work}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);
    return (
      <Swiper
        centeredSlides={true}
        loop={true}
        speed={600}
        parallax={true}
        spaceBetween={100}
        modules={[Parallax]}
        breakpoints={{
            0: {
              slidesPerView: 1,
              direction: 'vertical',
            },
            580: {
              slidesPerView: 2,
              spaceBetween: 40,
              direction: 'horizontal',
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 100,
              direction: 'horizontal',
            },
          }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-full"
      >
        {Object.values(works).map((work: any) => (
            <SwiperSlide key={work.id} className="flex relative">
              <WorksCard work={work}/>
            </SwiperSlide>
        ))}
      </Swiper>
    )
}