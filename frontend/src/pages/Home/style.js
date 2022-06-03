import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 64px;
  width: ${({theme}) => `min(100%, ${theme.container.md})`};
`;

export const DocumentInfo = styled.div`
  border-bottom: 0.5px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;

  .doc-link {
    text-decoration: none;
    width: 100%;
    height: 100%;
    padding: 5px;
    color: gray;
  }

  :hover {
    background-color: #e7f0fe;
    border-radius: 10px;
    border-bottom: none;
  }

  .doc-link:active,
  .doc-link:hover {
    color: gray;
  }

  .title {
    display: flex;
    align-items: center;
  }

  .title > .description-icon {
    width: 1.5rem;
    height: 1.5rem;
    color: #2e73e8;
    margin: 0px 10px;
  }

  .delete {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .delete:hover {
    background-color: #bbbcbe;
  }
`;

export const AddDocument = styled.div`
  border: 1px solid gray;
  border-radius: 50%;
  box-shadow: 0 0px 1px 1px gray;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 30px;
  right: 30px;

  .create-icon {
    width: 60%;
    height: 60%;
  }
`;
