import styled from 'styled-components';

export const SectionContainer = styled.section`
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
    align-content: center;

    @media screen and (max-width: 901px) {
        flex: 1;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`