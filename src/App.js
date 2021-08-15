import './App.css';
import Facebook from './components/Facebook.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Facebook Auth Example</h1>
        <p>To get started, authenticate with Facebook.</p>
        <div className="content">
          <Facebook />
        </div>
      </header>
    </div>
  );
}

export default App;
