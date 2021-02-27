import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ChallengeBoxContainer = styled.div`
    height: 100%;
    background: var(--black-dark);
    border-radius: 0.5rem;
    box-shadow: 0 0 1.8rem rgba(0, 0, 0, 0.4);
    padding: 1.5rem 2rem;
    color: var(--gray-line);

    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 471px) {
        width: 85%;
        margin: 0 auto;
    }
`

export const ChallengeNotActive = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.4;
    }

    p {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.4;
        max-width: 70%;
        margin-top: 3rem;
    }

    img {
        margin-bottom: 1.5rem;
    }
`

export const ChallengeActive = styled(motion.div)`
    height: 100%;
    display: flex;
    flex-direction: column;

    header {
        color: var(--blue);
        font-weight: 600;
        font-size: 1.8rem;
        padding: 0 2rem 1.5rem;
        border-bottom: 1px solid var(--gray-line);
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;

        strong {
            font-weight: 600;
            font-size: 3rem;
            color: var(--title);
            margin: 2.4rem 0 1.5rem;
        }

        p {
            line-height: 1.5;
        }
    }

    footer {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;

        button {
            height: 4.5rem;
            display: flex;
            align-items:center;
            justify-content: center;
            border: 0;
            border-radius: 0.5rem;
            color: var(--black-dark);
            font-size: 1.5rem;
            font-weight: 600;
            transition: filter 200ms;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }

    @media screen and (max-width: 901px) {
        button {
            margin-top: 1.5rem;
        }

        main {
            margin-top: 1.5rem;
        }
    }
    
`

export const FailedButton = styled.button`
    background: var(--red);
`

export const SucceededButton = styled.button`
    background: var(--green);
`