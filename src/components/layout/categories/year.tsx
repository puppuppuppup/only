import React from 'react';
import { useEffect, useRef } from 'react';
import { animateNumber } from '../../../utils/animations';
import cn from 'classnames';

type Props = {
    targetNumber: number;
    type: 'min' | 'max';
};

export const CategoryYear = ({ targetNumber, type }: Props) => {
    const ref = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        animateNumber(ref, targetNumber);
    }, [targetNumber]);

    return <span className={cn('categories_year', type)} ref={ref} />;
};
