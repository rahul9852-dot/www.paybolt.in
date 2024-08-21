'use client';

import Image from 'next/image';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

import profile1 from '@public/images/profile1.png';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './CustomerSaying.css';

export const CustomerSaying = () => {
  return (
    <section className="customer-saying-wrapper">
      <div className="customer-saying">
        <h3 className="text-3xl font-semibold text-primary text-center">
          Customer Saying
        </h3>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
            <SwiperSlide key={i} className="p-[2px]">
              <div className="card">
                <Image
                  src={profile1}
                  className="img"
                  alt="profile1"
                  width={50}
                  height={50}
                />
                <h5 className="text-center font-semibold text-xl pt-8">
                  Jithin Shreedhar
                </h5>
                <p className="text-sm mt-3">
                  "PayBolt's payment solution has helped our customers, the
                  societies, to connect their existing current accounts for a
                  real time view of bank transactions, making it easier for them
                  to manage their finances."
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
