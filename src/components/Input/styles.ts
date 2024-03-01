import styled, { css } from "styled-components";

const sharedStyle = css`
  font-size: 1rem;
  color: var(--color-2);
  padding: var(--gap-s) 0.75rem;
  background: var(--color-4);
  border-radius: var(--gap);
`;

export const Label = styled.label`
  display:block;
  margin-bottom: var(--gap-s);
  font-weight:600;
  ${sharedStyle}
`

export const Input = styled.input`
  border:none;
  font-family:monospace;
  ${sharedStyle}
`

