import styled from "styled-components";

export const Item = styled.li`
  display:flex;
  gap:var(--gap);
  flex:1
`

export const Title = styled.h2`
  font-size:1.5rem;
  margin-bottom:var(--gap);
  color: var(--color-1);
`

export const Section = styled.section`
  display:flex;
  margin-bottom:var(--gap);
  flex:1;
`

export const Box = styled.div`
padding:var(--gap-s) var(--gap);
background: var(--color-3);
border:none;
border-radius: var(--gap);
color:var(--color-2);
font-weight:600;
text-transform: capitalize;
margin-right:var(--gap) ;
`