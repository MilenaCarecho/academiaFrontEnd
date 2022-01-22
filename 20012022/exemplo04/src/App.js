import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";
import Card from "./components/Card";
import "./App.css";

function App() {
  const message = "Olá Teste";

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Card message={message} />
      </ThemeProvider>
    </>
  );
}

export default App;
