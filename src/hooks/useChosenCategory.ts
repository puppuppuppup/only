import { useEffect, useState } from 'react';
import { CATEGORIES } from '../data/categories.ts';

export const useChosenCategory = (chosenIndex: number) => {
    const [chosenCategory, setChosenCategory] = useState(CATEGORIES[chosenIndex]);
    const [minYear, setMinYear] = useState(0);
    const [maxYear, setMaxYear] = useState(0);

    useEffect(() => {
        setChosenCategory(CATEGORIES[chosenIndex]);
    }, [chosenIndex]);

    useEffect(() => {
        let minYear = Number.MAX_VALUE;
        let maxYear = 0;

        chosenCategory.events.forEach(event => {
            minYear = Math.min(event.year, minYear);
            maxYear = Math.max(event.year, maxYear);
        });

        setMinYear(minYear);
        setMaxYear(maxYear);
    }, [chosenCategory]);

    return {
        category: chosenCategory,
        years: {
            min: minYear,
            max: maxYear,
        },
    };
};
