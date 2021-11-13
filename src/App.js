import chat from "./images/chat.jpg";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1 className="titlered">Your name here</h1>
      <img src={chat} alt="chat" />

      <iframe
        width="320"
        height="240"
        src="https://www.youtube.com/embed/tcufMDk0uw8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
