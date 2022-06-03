import styled from 'styled-components'


export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 10;
`

export const Icon = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  .description-icon {
    width: 2.5rem;
    height: 2.5rem;
    color: #2E73E8;
    margin: 0px 10px;
  }
`

export const SearchBar = styled.div`
  margin: 0px 20px;
  border-radius: 8px;
  background-color: #F0F3F4;
  display: flex;
  align-items: center;
  height: 40px;
  width: min(60%, 500px);

  .search-icon {
    width: 1.6rem;
    height: 1.6rem;
    margin: 0px 10px;
  }
  
  .clear-icon {
    display: ${({typing})=>typing? 'block' : 'none'};
    border-radius: 50%;
    width: 1.6rem;
    height: 1.6rem;
    margin: 0px 10px;
  }

  .clear-icon:hover{
    background-color: #C2C2C2;
  }

  input,
  input:hover,
  input:active,
  input:focus{
    display: flex;
    flex-grow: 1;
    border: none;
    outline: none !important;
    background-color: #F0F3F4;
    font-size: 1rem;
  }

`
