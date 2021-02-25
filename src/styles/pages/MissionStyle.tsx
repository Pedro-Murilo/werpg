import styled from 'styled-components';

export const BackArrowLink = styled.a`
    border: 0.2rem solid var(--green-light);
    border-radius: 1rem;
    color: var(--white);
    cursor: pointer;
    font-size: 2.8rem;
    padding: 0.3rem 1rem;
    transition: 200ms;
    
    &:hover {
        background: var(--green-light);
        color: var(--black-dark);
    }
`

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;

    h2 {
        font-size: 2.8rem;
        color: var(--title);
    }
`
