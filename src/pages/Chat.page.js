import React from "react";
import "./Chat.css";

import Conversation from "../components/conversation.component";
import ConversationsList from "../components/conversationsList.component";
import MessageInput from "../components/messageInput.component";
import NavigationBar from "../components/navbar.component";

export default function Chat({ user }) {
  document.body.classList.add("bg-[#3898FF]");

  if (!user.sub) {
    window.location.href = "/login";
  }

  const [conversations, setConversations] = React.useState([]);
  const [message, setMessage] = React.useState([]);
  const [activeConversation, setActiveConversation] = React.useState({
    messages: [],
  });

  React.useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/api/listConversations?sub=${user.sub}`
    ).then((response) => {
      if (response.status === 200) {
        response.json().then((userConversations) => {
          setConversations(userConversations);
        });
      } else {
        response.text().then((text) => {
          alert(`Error: ${text}`);
        });
      }
    });
  }, [user.sub]);

  const handleSend = () => {
    if (message.length < 0) return;
    let copyConversation = {...activeConversation};
    copyConversation.messages.push({
      role: "user",
      content: message
    });
    setActiveConversation(copyConversation);


    if (activeConversation.id) {
      fetch(
        `${process.env.REACT_APP_API_URL}/api/message?conversation=${activeConversation.id}&message=${message}`,
        {
          method: "POST",
        }
      ).then((response) => {
        if (response.status === 200) {
          response.json().then((newConversation) => {
            console.log("response length", newConversation.messages.length);
            setMessage("");
            setActiveConversation(newConversation);
            const existingIndex = conversations.findIndex(
              (conversation) => conversation.id === newConversation.id
            );
            setConversations((prevConversations) => [
              ...prevConversations.slice(0, existingIndex),
              newConversation,
              ...prevConversations.slice(existingIndex + 1),
            ]);
          });
        } else {
          response.text().then((text) => {
            alert(`Error: ${text}`);
          });
        }
      });
    } else {
      fetch(
        `${process.env.REACT_APP_API_URL}/api/createConversation?sub=${user.sub}&message=${message}`,
        {
          method: "POST",
        }
      ).then((response) => {
        if (response.status === 200) {
          response.json().then((newConversation) => {
            console.log("response length", newConversation.messages.length);
            setActiveConversation(newConversation);
            setMessage("");
            setConversations([...conversations, newConversation]);
          });
        } else {
          response.text().then((text) => {
            alert(`Error: ${text}`);
          });
        }
      });
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="Chat">
        <ConversationsList
          conversations={conversations}
          activeConversation={activeConversation}
          setActiveConversation={setActiveConversation}
        />
        <div className="currentConversation">
          <Conversation activeConversation={activeConversation} />
          <MessageInput
            message={message}
            setMessage={setMessage}
            handleSend={handleSend}
          />
        </div>
      </div>
    </div>
  );
}
