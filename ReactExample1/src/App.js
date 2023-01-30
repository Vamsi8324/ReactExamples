import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Card from './component/Card'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Card/>
      </header>
    </div>
  );
}

export default App;
