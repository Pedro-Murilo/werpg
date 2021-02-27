import styled from 'styled-components';

export const CountdownContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Rajdhani';
    font-weight: 600;
    color: var(--title);

    div {
        flex: 1;
        display: flex;
        width: 20rem;
        align-items:center;
        justify-content: space-evenly;
        background: var(--black-light);
        box-shadow: 0 0 1.8rem rgba(0, 0, 0, 0.4);
        font-size: 15.5rem;
        border-radius: 0.5rem;
        text-align: center;

        span {
            flex: 1;
        }

        span:first-child {
            border-right: 1px solid var(--gray-line);
        }
    }

    > span {
        font-size: 15.5rem;
        margin: 0 0.5rem;
    }

    @media screen and (max-width: 471px) {
        width: 85%;
        height: 50%;
        margin: 3rem auto;
    }

    @media screen and (max-width: 461px) {
        display: grid;
        grid-template-columns: 1fr;
        gap: 5rem;

        div {
            width: 100%;
        }

        > span {
            display: none;
        }
    }
    
`

export const CountdownButton = styled.button`
    width: 100%;
    height: 6.5rem;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 0.5rem;
    box-shadow: 0 0 1.8rem rgba(0, 0, 0, 0.4);
    background: var(--blue);
    color: var(--white);
    font-size: 2.4rem;
    font-weight: 600;
    transition: background-color 200ms;

    &:not(:disabled):hover {
        background: var(--blue-dark);
    }

    &:disabled {
        background: var(--white);
        color: var(--blue-dark);
        cursor: not-allowed;
    }

    @media screen and (max-width: 471px) {
        width: 85%;
        margin: 3rem auto;
    }
`

export const AbandonCycleButton = styled.button`
    width: 100%;
    height: 6.5rem;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 0.5rem;
    box-shadow: 0 0 1.8rem rgba(0, 0, 0, 0.4);
    background: var(--white);
    color: var(--blue-dark);
    font-size: 2.4rem;
    font-weight: 600;
    transition: background-color 200ms;

    &:not(:disabled):hover {
        background: var(--red);
        color: var(--white)
    }

    @media screen and (max-width: 471px) {
        width: 85%;
        margin: 3rem auto;
    }
`