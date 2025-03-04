import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 393px;

    max-width: 1440px;
    min-height: 100vh;
    margin: 0 auto;
    padding-block: 170px 104px;

    &::after {
        position: absolute;
        content: '';
        inset: 0;

        padding-inline: 24px;

        opacity: 0.1;

        border: 1px solid var(--text-primary);
        border-top: none;
        border-bottom: none;

        z-index: -1;
    }

    @media screen and (max-width: 1000px) {
        padding-block: 59px 13px;
        gap: 1rem;
    }
`;
