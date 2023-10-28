// MessagingScreen.js

import React, { useState } from 'react';

const MessagingScreen = () => {
    // Mock data for conversations
    const [conversations, setConversations] = useState([
        {
            id: 1,
            name: 'John Doe',
            lastMessage: 'Hello! Are you available tomorrow?',
            timestamp: '10:23 AM'
        },
        {
            id: 2,
            name: 'Jane Smith',
            lastMessage: 'Thanks for your help!',
            timestamp: 'Yesterday'
        },
        // ... add more conversations as needed
    ]);

    return (
        <div className="messaging-screen">

            {/* Conversations List */}
            <div className="conversations-list">
                <h2>Conversations</h2>
                {conversations.map(conversation => (
                    <div key={conversation.id} className="conversation-item">
                        <h3>{conversation.name}</h3>
                        <p>{conversation.lastMessage}</p>
                        <span>{conversation.timestamp}</span>
                    </div>
                ))}
            </div>

            {/* Individual Chat Screen */}
            <div className="chat-screen">
                <h2>Chat with [Selected User]</h2>
                {/* Display chat messages here */}
                {/* For simplicity, not adding a mock chat data array here */}
                
                <div className="send-message">
                    <input type="text" placeholder="Type a message..." />
                    <button>Send</button>
                </div>
            </div>

        </div>
    );
}

export default MessagingScreen;
