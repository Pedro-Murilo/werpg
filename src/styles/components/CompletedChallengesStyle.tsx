import styled from 'styled-components';

export const CompletedChallengesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3.5rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid #d7d8da;
    font-weight: 500;

    span:first-child {
        font-size: 1.6rem;
    }

    span:last-child {
        font-size: 2.4rem;
    }

    @media screen and (max-width: 471px) {
        width: 70%;
        margin: 3rem auto;
    }
    
`