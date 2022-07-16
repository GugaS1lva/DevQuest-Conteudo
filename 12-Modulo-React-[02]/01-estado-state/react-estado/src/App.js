import './App.css'
import Panel from './components/panel/panel'
import Panel02 from './components/teste-01/state-usando-class';
import DeckOfCards from './components/deck-of-cards/deck-of-cards';
import Login from './components/login-test/login';
import Login02 from './components/login-test-02/login-02';

function App() {

  return (
    <>
      <Panel/>
      <Panel02 />

      <DeckOfCards />

      <Login />
      <Login02 />
    </>
  )
}

export default App;
