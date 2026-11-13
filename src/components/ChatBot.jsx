import { useState } from "react";
import { chatData } from "../data";

function ChatBot() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    const found = chatData.find((item) =>
      input.toLocaleLowerCase().includes(item.keyword),
    );

    if (found) {
      setReply(found.answer);
    } else {
      setReply("Sorry, Please try again...");
    }

    setInput("");
  }

  return (
    <div className="chatbot">
      <h3>ChatBot</h3>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Ask anything.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <p>{reply}</p>
    </div>
  );
}

export default ChatBot;
