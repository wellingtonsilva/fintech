import styled from "styled-components";

export const Nav = styled.nav`
    background: var(--color-3);
    border-radius: var(--gap);
    padding: var(--gap);

    li{
        display: flex;
        align-items: center;
        gap: var(--gap-s);
        margin-top: var(--gap);

    }

    
    li:hover span{
            background: var(--color-3);
        }

    span{
        width: 2rem;
        height:2rem;
        background: var(--color-4);
        display: flex;
        padding: var(--gap-s);
        border-radius: var(--gap);
        align-items: center;
        justify-content: center;
    }

    a{
        flex:1;
        text-decoration: none;
        color: var(--color-1);
    }
`