import "./styles.css";
import { Button, Theme } from "./StyledButton";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Button>Click Me! </Button>
      </ThemeProvider>
    </div>
  );
}
