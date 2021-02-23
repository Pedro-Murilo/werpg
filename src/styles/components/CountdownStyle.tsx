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
        box-shadow: 0 0 6.8rem rgba(0, 0, 0, 0.05);
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
    background: var(--blue);
    color: var(--white);
    font-size: 2.4rem;
    font-weight: 600;
    transition: background-color 200ms;

    &:hover {
        background: var(--blue-dark);
    }
`