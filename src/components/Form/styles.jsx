import styled from 'styled-components';

export const Button = styled.button`
  width: 8rem;
  height: 2.5rem;
  background: linear-gradient(to right, #4dbc5d, #08aabf);
  border-radius: 44px;
  color: white;
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;

  & input {
    // width: 90%;
    border: 1px solid lightgray;
    margin: 5px;
    border-radius: 4px;
  }
`;

export const StyledData = styled.label`
  font-weight: bold;
  font-family: Alata, sans-serif;
  font-size: 13px;
`;

export const StyledRadio = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonCenter = styled.div`
  text-align: center;
`;

export const Line = styled.div`
  display: inline-block;
  width: 430px;
  height: 0.5px;
  background-color: #dedede;
  align-items: center;
  text-align: center;
  margin: 30px 0px;
`;
