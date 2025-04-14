import "./Home.css";
import back from "./img/back-icon.png";
import avatar from "./img/Avatars.png";
import logo from "./img/logo.png";
import chat from './img/chat-icon.png';
import archived from './img/archived.png';
import images from './img/images.png';

export const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="back-icon">
          <img src={back} alt="back" />
          <h4>back</h4>
        </div>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="content-header">
        <h2>start a new chat</h2>
        <h2 style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          with <img src={logo} alt="logo" />{" "}
        </h2>
        <div className="new-topic">
          <h2 className="chatbot-ai">Chat bot AI</h2>
          <button className="new-topic-button">+ new topic</button>
        </div>
        <div className="history">
          <h2>History</h2>
          <input type="text" placeholder="search" className="search-input" />
        </div>
        <div className="chat-button">
          <button className="button-one"><img src={chat} alt="chat" /> chat</button>
          <button className="button-two"><img src={archived} alt="chat" /> Archived</button>
          <button className="button-two"><img src={images} alt="chat" /> Images</button>
        </div>
        <div className="chat-history">
          
        </div>
      </div>
    </div>
  );
};
