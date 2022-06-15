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
        <a href='https://crystallinemediamanagement.com/order-form1654885696253'>Click To View Checkout Page</a>
        <CopyToClipboard text='https://crystallinemediamanagement.com/order-form1654885696253'>
          <button>Copy Checkout Link To Clipboard</button>
        </CopyToClipboard>
        </header>
      </div>
    </div>
  );
}

export default App;
