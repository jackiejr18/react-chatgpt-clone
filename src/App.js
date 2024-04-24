import './App.css';
import gptLogo from './assets/chatgpt.svg';

function App() {
  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'><img src={gptLogo} className='logo'/><span className='brand'>ChatGPT</span></div>
          <button className='midBtn'><img className='addBtn'/>New Chat</button>
          <div className='upperSideBottom'>
            <button className='query'><img src=''/>What is Programming ?</button>
            <button className='query'><img src=''/>What is Programming ?</button>
          </div>
        </div>
        <div className='lowerSide'>
         
        </div>
      </div>
      <div className='main'>

      </div>
    </div>
  );
}

export default App;
