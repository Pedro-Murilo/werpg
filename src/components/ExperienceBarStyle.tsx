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
`


export const ContainerExperience = styled.div`
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 2rem;
    position: relative;

     div {
    height: 4px;
    border-radius: 4px;
    background: var(--green);
  }
`