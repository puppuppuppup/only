import { RefObject } from 'react';
import { ROTATE_ANIMATION_DURATION_MS } from '../constants/animations';

export const animateNumber = (
    ref: RefObject<HTMLSpanElement | null>,
    targetNumber: number,
    duration = ROTATE_ANIMATION_DURATION_MS,
) => {
    if (!ref.current) {
        return;
    }

    const startNumber = Number(ref.current.textContent);
    const startTime = performance.now();

    if (!startNumber) {
        ref.current.textContent = targetNumber.toString();
        return;
    }

    const animate = (currentTime: number) => {
        if (!ref.current) {
            return;
        }

        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        const easedProgress = 1 - Math.pow(1 - progress, 3);

        const currentNumber = Math.round(
            startNumber + easedProgress * (targetNumber - startNumber),
        );
        ref.current.textContent = currentNumber.toString();

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
};
