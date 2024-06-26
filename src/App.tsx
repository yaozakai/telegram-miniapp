import React from 'react';
import logo from './logo.svg';
import './App.css';
import TelegramMiniApp from './components/TelegramMiniApp';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reloooooad.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Include the TelegramMiniApp component */}
        <p>{!data ? "Loading..." : data}</p>

      </header>
        <TelegramMiniApp />
    </div>
  );
}

export default App;
