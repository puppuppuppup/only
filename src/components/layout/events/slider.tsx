import { TCategory } from '../../../types/categories.ts';
import { SliderBtns } from './btns.tsx';
import './slider.scss';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Controller, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { ROTATE_ANIMATION_DURATION_MS } from '../../../constants/animations.ts';

type Props = {
    category: TCategory;
    isRotating: boolean;
};

export const EventsSlider = ({ category, isRotating }: Props) => {
    const [swiper, setSwiper] = useState<SwiperClass | undefined>();
    const [delayedCategory, setDelayedCategory] = useState(category);
    const [sliderProgress, setSliderProgress] = useState(0);

    const updateSliderProgress = () => {
        if (!swiper) {
            return;
        }
        setSliderProgress(swiper.progress);
    };

    useEffect(() => {
        setTimeout(() => {
            setDelayedCategory(category);
        }, ROTATE_ANIMATION_DURATION_MS / 2);
    }, [category]);

    return (
        <div className={cn('slider_wrapper_mobile', isRotating && 'rotating')}>
            <span className='category_name'>{delayedCategory.name}</span>
            <span className='separator' />
            <div className={cn('slider_wrapper', isRotating && 'rotating')}>
                <Swiper
                    modules={[Controller, Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    slidesPerView={1.5}
                    draggable
                    spaceBetween={25}
                    onSwiper={setSwiper}
                    onSlideChange={updateSliderProgress}
                    breakpoints={{
                        1000: {
                            slidesPerView: 3.4,
                            spaceBetween: 80,
                        },
                    }}
                >
                    {delayedCategory.events.map((event, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className='event'>
                                    <span className='event_year'>{event.year}</span>
                                    <p className='event_body'>{event.body}</p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <SliderBtns progress={sliderProgress} swiperInstance={swiper} />
            </div>
        </div>
    );
};
