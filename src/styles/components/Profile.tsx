import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;
    align-items:center;

    img {
        width: 8.25rem;
        height: 8.25rem;
        border-radius: 50%;
    }

    div {
        margin-left: 2.4rem;

        strong {
            font-size: 2.4rem;
            font-weight: 600;
            color: var(--title);
        }

        p {
            font-size: 1.5rem;

            img {
                width: 2.8rem;
                height: 2.8rem;
                margin-right: 0.5rem;
                padding-top: 1rem;
            }
        }
    }
`