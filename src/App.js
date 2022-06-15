import Crystal from './Crystal.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='gold'>
        <header className="App-header">
        <img src={Crystal} className="App-logo" alt="logo" />
        <h1 className='App-title'>Checkout Links Demo #1</h1>
        <CopyToClipboard text='https://crystallinemediamanagement.com/order-form1654885696253'>
          <button>Justin's Closing Link</button>
        </CopyToClipboard>
        </header>
      </div>
    </div>
  );
}

export default App;
