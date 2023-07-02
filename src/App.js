import FlipCard from './componets/FlipCard';
import CardBonham from './componets/CardBonham';
import CardJohnPaul from './componets/CardJohnPaul';
import CardRobert from './componets/CardRobert';
import Card from './componets/Card';

import './App.css';

function App() {
  return (
    
    <div className='other-body' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/zeppelinBg1.jpeg)`}}>
  
    
    <div className="App">
    
      <div className = "display">
        <div className="fade-out"><Card /></div>
        <div className='fade-out'><CardRobert /></div>
        <div className='fade-out'><CardJohnPaul /></div>
        <div className='fade-out'><CardBonham /></div>


      </div>
  
      
      
    </div>
    </div>
  );
}

export default App;


