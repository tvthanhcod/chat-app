import HeaderChatRoom from "./HeaderChatRoom"
import Input from "./input"
import Message from "./Message"

const ChatRoom = () => {
    return (
        <div className="chatroom__wrapper">
            <HeaderChatRoom />
            <div className="message__box">
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
            <Input />
        </div>
    )
}

export default ChatRoom