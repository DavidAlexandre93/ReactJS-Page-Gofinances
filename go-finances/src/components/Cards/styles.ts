import styled from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
`;

export const Card = styled.div`
  background: ${({ total }: CardProps): string => (total ? '#FF872C' : '#fff')};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    a {
      background: #7159c1;
    }
    p {
      font-size: 16px;
    }
  }
  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: 500;
    line-height: 54px;
  }
`;