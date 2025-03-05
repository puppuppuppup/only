import { SliderBtn, TSliderBtnProps } from './btn.tsx';

export const SliderBtns = ({ swiperInstance, progress }: TSliderBtnProps) => {
    return (
        <>
            <SliderBtn type='prev' progress={progress} swiperInstance={swiperInstance} />
            <SliderBtn type='next' progress={progress} swiperInstance={swiperInstance} />
        </>
    );
};
