import { ThemeProvider } from "styled-"

function App() {
  return (
    <>
    <GlobalStyle />
      <ThemeProvider theme={theme}>
      <Card />
      </ThemeProvider>
    </>
  );
}

export default App;
