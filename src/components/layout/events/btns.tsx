import React from 'react';
import { SliderBtn, TSliderBtnProps } from './btn';

export const SliderBtns = ({ swiperInstance, progress }: TSliderBtnProps) => {
    return (
        <>
            <SliderBtn type='prev' progress={progress} swiperInstance={swiperInstance} />
            <SliderBtn type='next' progress={progress} swiperInstance={swiperInstance} />
        </>
    );
};
