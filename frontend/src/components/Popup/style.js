import styled from 'styled-components';

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PopupInner = styled.div`
  max-width: 640px;
  min-height: 100px;
  padding: 1em;
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 0px 0px 5px gray;
  background-color: ${props => props.theme.background};

  .close {
    float: right;
    cursor: pointer;
  }
  

  form {
    display: flex;
    flex-direction: column;
  }

  form > input {
    margin: 5px 0;
  }
  
  form > button {
    margin-top: 10px;
    background-color: ${props=> props.theme.background};
    border: 1px solid;
    border-radius: 5px;
    border-color: gray;
    height: 24px;
    width: 100%;
  }
`
