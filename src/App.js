import CurrencyConverter from './CurrencyConverter';
import './App.css';

function App() {
  return (
    <div className='other-body' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/dollars.avif)`}}>
    <div className="App">
      {/* Your app content here */}
      <CurrencyConverter />
    </div>
    </div>
  );
}

export default App;


