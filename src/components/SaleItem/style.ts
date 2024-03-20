import styled from "styled-components";

export const Sale = styled.div`
  display:grid;
  grid-template-columns: auto auto 1fr;
  gap:var(--gap);
  align-items:center;
  margin-bottom:var(--gap);
  background: #fff;
  padding: var(--gap);
  
  div:last-child{
    justify-self:end;
  }

  a{
    text-decoration:none;
    color:inherit;
    font-size: 1.2rem;
    font-family: monospace;
    text-decoration: underline;
  }
`