import React from "react";

export default function ConversationsListItem({
  id,
  lastTimestamp,
  conversation,
  activeConversation,
  setActiveConversation,
}) {
  const lastMessage =
    conversation.messages[conversation.messages.length - 1].content;

  return (
    <div
      className={
        "conversationsListItem " +
        (activeConversation.id === id ? " activeConversation" : "")
      }
      onClick={() => {
        setActiveConversation(conversation);
      }}
    >
      <p
        dangerouslySetInnerHTML={{
          __html:
            lastMessage.length > 20
              ? lastMessage.slice(0, 20) + "&hellip;"
              : lastMessage,
        }}
      ></p>
      <span className="conversationTimestamp">
        {new Date(lastTimestamp * 1000).toLocaleString()}
      </span>
    </div>
  );
}
