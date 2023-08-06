import React from "react";

export default function MessageBubble({ messageContent, isUser }) {
  return (
    <div
      className={
        "messageBubble " + (isUser ? "userMessageBubble" : "botMessageBubble")
      }
    >
      {messageContent}
    </div>
  );
}
