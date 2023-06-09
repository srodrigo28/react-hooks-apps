import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: #2E332E;

  padding: 14.5px 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > section {
    display: flex;
    gap: 2rem;

    &:last-child {
      gap: 1rem;
    }

    > img {
      width: 230px;

      @media(max-width: 500px) {
        width: 120px;
      }
    }

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
  }
`;