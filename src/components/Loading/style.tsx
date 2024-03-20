import styled, {keyframes} from "styled-components";


const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


export const Loading = styled.div`
    border: var(--gap-s) solid var(--color-2);
    border-right-color: var(--color-4);
    width: var(--gap);
    height: var(--gap);
    border-radius: 50%;
    animation: ${spin} 1s infinite;
`;

