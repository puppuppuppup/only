import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { ArrowIcon } from '../../icons/arrow';
import cn from 'classnames';
import './buttons.scss';

export const ArrowBtn = (attributes: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button {...attributes} className={cn('btn_arrow', attributes.className)}>
            <ArrowIcon />
        </button>
    );
};
