import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFD700; 
  font-size: 22px;
  color: black;
  padding: 35px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;
 

  > svg {
    margin: 0 20px;
    
  }

  &:hover {
    background-color: #FFD700;

  }
`;