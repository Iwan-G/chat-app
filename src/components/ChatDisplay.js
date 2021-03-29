import React, {useState} from 'react'
import ChatListener from '../containers/ChatListener'
import MessageInput from './MessageInput'

const ChatDisplay=({currentUser})=>{
    const [conversations, setConversations] = useState([
        {username: 'Edwind', message: 'What do you call a deer with no eye?', timestamp: 1544532325758},
        {username: 'Liren', message: 'No idea', timestamp: 1544532341078},
    ])

    return(
        <div className="body-width" > 
            <ChatListener conversations={conversations} />
            <MessageInput conversations={conversations} setConversations={setConversations} currentUser={currentUser}/>
        </div>
    )
}

export default ChatDisplay;