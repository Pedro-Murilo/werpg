import styled from 'styled-components';

export const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const ContainerModal = styled.div`
    background: var(--black-dark);
    width: 100%;
    max-width: 40rem;
    padding: 2rem 3rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 6rem rgba(0, 0, 0, 0.5);
    text-align: center;
    position: relative;

    strong {
        font-size: 2.4rem;
        color: var(--title);
    }

    p {
        font-size: 2.4rem;
        color: var(--text);
        margin-top: 3.5rem;
    }

    @media screen and (max-width: 471px) {
        width: 85%;
        height: 40%;
        margin: 3rem auto;
    }
`

export const HeaderModal = styled.header`
    font-size: 12.5rem;
    font-weight: 600;
    color: var(--blue);
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
`

export const ButtonModal = styled.button`
    position: absolute;
    right: 0.7rem;
    top: 0.7rem;
    background: transparent;
    border: 0;
    color: var(--white);
    font-size: 0;
    transition: 200ms;

    &:hover {
        background: var(--red);
    }
`

export const LevelUpAnimationContainer = styled.div`
    position:  absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
