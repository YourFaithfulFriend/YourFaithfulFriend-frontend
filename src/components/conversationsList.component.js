import React from "react";
import ConversationsListItem from "./conversationsListItem.component";
import CreateConversation from "./createConversation.component";

export default function ConversationsList({
  conversations,
  activeConversation,
  setActiveConversation,
}) {
  const sortedConversations = [...conversations].sort(
    (a, b) => b.lastTimestamp - a.lastTimestamp
  );

  const conversationsListItemsArray = sortedConversations.map(
    (conversation, index) => (
      <ConversationsListItem
        key={index}
        id={conversation.id}
        lastMessage={conversation.lastMessage}
        lastTimestamp={conversation.lastTimestamp}
        conversation={conversation}
        activeConversation={activeConversation}
        setActiveConversation={setActiveConversation}
      />
    )
  );

  return (
    <div className="conversationsList text-white">
      <CreateConversation setActiveConversation={setActiveConversation} />
      {conversationsListItemsArray}
    </div>
  );
}
