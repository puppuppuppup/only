import React from 'react';
import { CATEGORIES } from '../../../data/categories';
import { formatNumberToDoubleDigit } from '../../../utils/formatters';
import { ArrowBtn } from '../../ui/buttons/arrow';
import './pagination.scss';

type Props = {
    chosenIndex: number;
    setChosenIndex: (num: number) => void;
};

export const CategoriesPagination = ({ chosenIndex, setChosenIndex }: Props) => {
    const next = () => {
        if (chosenIndex >= CATEGORIES.length - 1) {
            return;
        }
        setChosenIndex(chosenIndex + 1);
    };

    const prev = () => {
        if (chosenIndex <= 0) {
            return;
        }
        setChosenIndex(chosenIndex - 1);
    };

    return (
        <div className='pagination'>
            <span className='pagination_counter'>
                {formatNumberToDoubleDigit(chosenIndex + 1)}/
                {formatNumberToDoubleDigit(CATEGORIES.length)}
            </span>
            <div className='pagination_btns'>
                <ArrowBtn onClick={() => prev()} disabled={chosenIndex <= 0} />
                <ArrowBtn
                    className='rotated'
                    onClick={() => next()}
                    disabled={chosenIndex >= CATEGORIES.length - 1}
                />
            </div>
        </div>
    );
};
