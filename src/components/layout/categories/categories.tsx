import React from 'react';
import { useState } from 'react';
import './categories.scss';
import { CATEGORIES } from '../../../data/categories';
import { Category } from './category';
import { CategoryYear } from './year';
import { useChosenCategory } from '../../../hooks/useChosenCategory';

const DEGREES_PER_CIRCLE = 360;
const START_ROTATE_INDENT = 20;

type Props = {
    chosenIndex: number;
    setChosenIndex: (num: number) => void;
};

export const Categories = ({ chosenIndex, setChosenIndex }: Props) => {
    const [categoryIndent] = useState(DEGREES_PER_CIRCLE / CATEGORIES.length);
    const [rotateIndent] = useState(START_ROTATE_INDENT);
    const { years } = useChosenCategory(chosenIndex);

    return (
        <div className='categories'>
            <div className='categories_border horizontal' />
            <div className='categories_border vertical' />
            <div className='categories_circle_container'>
                <div className='categories_circle' />
                <CategoryYear targetNumber={years.min} type='min' />
                <CategoryYear targetNumber={years.max} type='max' />
                {CATEGORIES.map((category, i) => {
                    const rotateDegree = categoryIndent * (i - chosenIndex) + rotateIndent;
                    return (
                        <Category
                            key={i}
                            category={category}
                            index={i}
                            isChosen={chosenIndex === i}
                            onChoose={() => setChosenIndex(i)}
                            rotateDegree={rotateDegree}
                        />
                    );
                })}
            </div>
        </div>
    );
};
