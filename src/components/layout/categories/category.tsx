import { TCategory } from '../../../types/categories';
import cn from 'classnames';

type Props = {
    category: TCategory;
    rotateDegree: number;
    index: number;
    onChoose: () => void;
    isChosen: boolean;
};

export const Category = ({ category, rotateDegree, onChoose, index, isChosen }: Props) => {
    return (
        <div
            className='category_container'
            style={{
                transform: `rotate(${rotateDegree}deg)`,
            }}
        >
            <div
                className={cn('category_circle', isChosen && 'chosen')}
                onClick={() => {
                    onChoose();
                }}
            >
                <div
                    className='category_circle_content'
                    style={{
                        transform: `translate(-50%, -50%) rotate(${-1 * rotateDegree}deg)`,
                    }}
                >
                    <span className='category_circle_content_number'>{index + 1}</span>
                    <span className='category_circle_content_name'>{category.name}</span>
                </div>
            </div>
        </div>
    );
};
