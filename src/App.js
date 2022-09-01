import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Widget from "./components/CartWidget/CartWidget";
import Foto from "./cart.svg"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {


  return (
    <div className="App">
        <NavBar>
          <Widget/>
        </NavBar>
       
      <header className="App-header">

      <ItemListContainer greeting="Hola como estan puse a girar el icono con el de react saludos!">
      </ItemListContainer>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={Foto} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
