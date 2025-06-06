import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 
 html{
  --color-1:#463220;
  --color-2:#66593c;
  --color-3:#eceadd;
  --color-4:#f7f8f5;
  --color-5:#ffffff;
  --gap-s: 0.625rem;
  --gap: 1.25rem;
}

body{
  font-family: sans-serif;
  margin:0;
  color: var(--color-2);
  background: var(--color-4);
}

.box {
  padding: var(--gap);
  border-radius: var(--gap);
  background: var(--color-5);
}

button{
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
}

h1,h2,h3{
  font-weight: 600;
  margin:0;
}

ul{
  list-style:none;
  padding: 0;
  margin: 0;
}

.flex {
  display: flex;
  gap: var(--gap);
}
.flex > * {
  flex:1;
}

.mb{
  margin-bottom: var(--gap);
}

.bg-1{
  background: var(--color-1);
}
.bg-2{
  background: var(--color-2);
}
.bg-3{
  background: var(--color-3);
}
.bg-4{
  background: var(--color-5);
}
.bg-5{
  background: var(--color-5);
}

.container{
  display: grid;
  padding: var(--gap);
  gap: var(--gap);
  grid-template-columns: 240px auto;
}

`