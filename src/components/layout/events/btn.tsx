import React from 'react';
import { SwiperClass, useSwiper } from 'swiper/react';
import { ArrowSliderIcon } from '../../icons/arrow-slider';
import cn from 'classnames';
import './slider.scss';
import { useEffect, useState } from 'react';

export type Props = {
    type: 'next' | 'prev';
};

export type TSliderBtnProps = {
    progress: number;
    swiperInstance?: SwiperClass;
};

export const SliderBtn = ({ type, progress, swiperInstance }: TSliderBtnProps & Props) => {
    const swiperHooked = useSwiper();
    const [canBeClicked, setCanBeClicked] = useState(false);

    const clickHandler = () => {
        const swiper = swiperInstance || swiperHooked;
        if (type === 'next') {
            if (swiperInstance) {
            }
            swiper.slideNext();
        }
        if (type === 'prev') {
            swiper.slidePrev();
        }
    };

    useEffect(() => {
        if (type === 'next' && progress === 1) {
            setCanBeClicked(false);
            return;
        }
        if (type === 'prev' && progress === 0) {
            setCanBeClicked(false);
            return;
        }
        setCanBeClicked(true);
    }, [progress]);

    return (
        <button
            type='button'
            className={cn('slider_btn', type === 'prev' && 'prev', !canBeClicked && 'hidden')}
            onClick={clickHandler}
        >
            <ArrowSliderIcon />
        </button>
    );
};
