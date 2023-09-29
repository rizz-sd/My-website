import './App.css';
import Sidebar_nav from './components/sidebar';
import Navbar from './components/navbar';


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar_nav />
      <header className="App-header">
        <p>
          <img className='image' src={require('./resources/Peeking.jpg')}></img>
          <div>Hi! I am Ritika Agrawal.</div>
        </p>
      </header>
    </div>
    
  );
}
