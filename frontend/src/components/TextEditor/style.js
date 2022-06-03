import styled from 'styled-components'


export const Container = styled.div`
  background-color: #F8F9FA;
  margin-top: 64px;
  padding-bottom: 16px;
  min-height: calc(100vh - 64px);
  
  .toolbar {
    display: flex;
    position: sticky;
    top: 64px;
    z-index: 50;
    justify-content:center;
  }

  .editor {
    background-color: white;
    margin: 20px auto;
    padding: 20px;
    width: ${({theme})=> `min(100%, ${theme.container.md})`};
    min-height: calc(100vh - 64px);
    box-shadow: 0px 5px 3px 3px #E5E6E7;
  }
`
