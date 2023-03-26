import Sidebar from "./sidebar/Sidebar"
import ChatRoom from "./chatroom/ChatRoom"

const MainChat = () => {
    return (
        <div className="mainchat__wrapper">
            <Sidebar />
            <ChatRoom />
        </div>
    )
}

export default MainChat