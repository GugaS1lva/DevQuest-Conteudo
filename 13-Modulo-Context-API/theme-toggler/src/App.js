import './App.css';
import { ThemeTogglerButtom } from './components/theme-toggler-buttom/theme-toggler-buttom';
import { ThemeProvider } from './contexts/theme-context';

function App() {
  return (
  <ThemeProvider>
    <ThemeTogglerButtom />
  </ThemeProvider>
  );
}

export default App;
