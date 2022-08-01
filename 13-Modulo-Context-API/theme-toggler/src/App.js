import './App.css';
import { ThemeTogglerButtom } from './components/theme-toggler-buttom/theme-toggler-buttom';
import { ThemeProvider } from './contexts/theme-context';
import { Card } from './components/card/card';

function App() {
  return (
  <ThemeProvider>
    <ThemeTogglerButtom />
    <Card />
  </ThemeProvider>
  );
}

export default App;
