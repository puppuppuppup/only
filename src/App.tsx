import { useState } from 'react';
import { Categories } from './components/layout/categories/categories';
import { CategoriesPagination } from './components/layout/pagination/pagination';
import { Header } from './components/layout/header/header';
import { Container } from './components/ui/container';
import './App.scss';

function App() {
    const [chosenCategoryIndex, setChosenCategoryIndex] = useState(0);

    return (
        <Container className='container'>
            <Header />
            <Categories chosenIndex={chosenCategoryIndex} setChosenIndex={setChosenCategoryIndex} />
            <div className='container_bottom'>
                <CategoriesPagination
                    chosenIndex={chosenCategoryIndex}
                    setChosenIndex={setChosenCategoryIndex}
                />
            </div>
        </Container>
    );
}

export default App;
