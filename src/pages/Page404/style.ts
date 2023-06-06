import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background: black;

    color: white;
    font-size: 4em;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

    h3{margin-right: 50px}
`;
export const ButtonBack = styled.a`
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    transition: .5s;
    list-style: none;

    &:hover {
        opacity: .7;
        font-size: 1.2em;
    }
    
    cursor: pointer;
`