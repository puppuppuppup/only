import { ButtonHTMLAttributes } from 'react';
import { ArrowIcon } from '../../icons/arrow.tsx';
import cn from 'classnames';
import './buttons.scss';

export const ArrowBtn = (attributes: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button {...attributes} className={cn('btn_arrow', attributes.className)}>
            <ArrowIcon />
        </button>
    );
};
