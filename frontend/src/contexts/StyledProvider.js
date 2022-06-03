import { createGlobalStyle } from "styled-components";
import { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../lib/theme/theme";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}) => theme.body};
    color: ${({theme})=> theme.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.5s ease;
  }
`


const ThemeContext = createContext({});

export function StyledProvider({children}) {
  const [theme, setTheme] = useState('light');
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  const themeToggle = () => {
    setTheme((prev)=> (prev==='dark'?'light': 'dark'))
  }
  return (
    <ThemeContext.Provider value={{theme, themeToggle}}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles/>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContext;

