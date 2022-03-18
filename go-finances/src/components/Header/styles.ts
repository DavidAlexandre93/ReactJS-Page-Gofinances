import styled from 'styled-components'

export const Container = styled.div`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: 0 20px 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;

    span {
      font-size: 1.75rem;
      font-weight: medium;
    }

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        padding-bottom: 6px;
        border-bottom: 2px solid #FF872C;

        & + a {
          margin-left: 32px;
          margin-right: 5px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`