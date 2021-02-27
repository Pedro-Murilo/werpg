import styled from "styled-components";

export const HeaderExperience = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1.5rem;
  }
`;

export const CurrentExperience = styled.span`
    position: absolute;
    top: 1.2rem;
    transform: translateX(-50%);
    transition: 1.5s ease-in-out;
`

export const ContainerExperience = styled.div`
    flex: 1;
    height: 0.4rem;
    border-radius: 0.4rem;
    margin: 0 2rem;
    position: relative;
    background: var(--gray-line);

     div {
    height: 0.4rem;
    border-radius: 0.4rem;
    background: var(--green);
    transition: 1.5s ease-in-out;
  }
`