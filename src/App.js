import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg'
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg'; 

function App() {
  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'><img src={gptLogo} className='logo'/><span className='brand'>ChatGPT</span></div>
          <button className='midBtn'><img src={addBtn} className='addBtn'/>New Chat</button>
          <div className='upperSideBottom'>
            <button className='query'><img src={msgIcon}/>What is Programming ?</button>
            <button className='query'><img src={msgIcon}/>How to use an API ?</button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'><img src={home} className='listItemsImg'/>Home</div>
          <div className='listItems'><img src={saved} className='listItemsImg'/>Saved</div>
          <div className='listItems'><img src={rocket} className='listItemsImg'/>Upgrade to Pro</div>
        </div>
      </div>
      <div className='main'>
        <div className='chats'>
          <div className='chat'>
            <img src={userIcon}/><p className='txt'>lorem</p>
          </div>
          <div className='chat'>
            <img src={gptImgLogo}/><p className='txt'>lorem</p>
          </div>
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Send a message'/><button className='send'><img src={sendBtn}/></button>
          </div>
          <p>ChatGPT may display inaacurate information.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
