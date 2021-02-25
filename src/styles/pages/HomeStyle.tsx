import styled from 'styled-components';

export const SectionContainer = styled.section`
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
    align-content: center;
`

export const ContainerMissionsLink = styled.span`
    display: flex;
    justify-content: flex-end;
    padding-top: 5rem;
`
export const MissionLink = styled.a`
    color: var(--green-light);
    border: 0.2rem solid var(--green-light);
    border-radius: 0.5rem;
    cursor: pointer;
    padding: 1rem;
    font-size: 1.8rem;
    transition: 200ms;

    &:hover {
        background: var(--green-light);
        color: var(--black-dark);
    }
`