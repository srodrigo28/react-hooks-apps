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

    > nav {
      display: flex;
      gap: 1rem;

      a {
        color: #fff;
        font-size: 20px;
        position: relative;
        text-decoration: none;

        &:before {
          content: '';
          border-radius: 50px;
          bottom: -10px;
          position: absolute;
          width: 0%;
          height: 10px;
          background: #3CA63A;
          transition: .3s;
        }

        &:hover {
          &:before {
            width: 100%;
          }
        }
      }
    }
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