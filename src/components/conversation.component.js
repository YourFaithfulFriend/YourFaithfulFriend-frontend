import React, { useEffect, useRef } from "react";
import MessageBubble from "./messageBubble.component";

export default function Conversation({ activeConversation }) {
  const conversationRef = useRef(null);
  useEffect(() => {
    // Scroll to the bottom of the conversation when messages change
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [activeConversation]);

  const messageBubbleArray = [];

  for (const index in activeConversation.messages) {
    messageBubbleArray.push(
      <MessageBubble
        key={index}
        isUser={activeConversation.messages[index].role === "user"}
        messageContent={activeConversation.messages[index].content}
      />
    );
  }
  return (
    <div className="conversation" ref={conversationRef}>
      {messageBubbleArray}
    </div>
  );
}
