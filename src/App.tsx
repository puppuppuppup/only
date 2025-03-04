import { useEffect, useRef, useState } from 'react';
import { Categories } from './components/layout/categories/categories';
import { CategoriesPagination } from './components/layout/pagination/pagination';
import { Header } from './components/layout/header/header';
import { Container } from './components/ui/container';
import './App.scss';
import { EventsSlider } from './components/layout/events/slider';
import { useChosenCategory } from './hooks/useChosenCategory';
import { CATEGORIES } from './data/categories';
import { ROTATE_ANIMATION_DURATION_MS } from './constants/animations';

function App() {
    const [chosenCategoryIndex, setChosenCategoryIndex] = useState(0);
    const { category } = useChosenCategory(chosenCategoryIndex);
    const [isRotating, setIsRotating] = useState(false);
    const cancelRotatingTimeout = useRef(setTimeout(() => {}));

    useEffect(() => {
        setIsRotating(true);
        clearTimeout(cancelRotatingTimeout.current);
        cancelRotatingTimeout.current = setTimeout(() => {
            setIsRotating(false);
        }, ROTATE_ANIMATION_DURATION_MS);
    }, [chosenCategoryIndex]);

    if (CATEGORIES.length < 2 || CATEGORIES.length > 6) {
        return (
            <div className='error'>
                <span>
                    Указано неверное количество категорий (см. <code>src/data/categories.ts</code>)
                </span>
            </div>
        );
    }

    return (
        <Container className='container'>
            <Header />
            <Categories chosenIndex={chosenCategoryIndex} setChosenIndex={setChosenCategoryIndex} />
            <div className='container_bottom'>
                <CategoriesPagination
                    chosenIndex={chosenCategoryIndex}
                    setChosenIndex={setChosenCategoryIndex}
                />
                <EventsSlider category={category} isRotating={isRotating} />
            </div>
        </Container>
    );
}

export default App;
