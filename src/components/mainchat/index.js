import Sidebar from "./sidebar/Sidebar"
import ChatRoom from "./chatroom/ChatRoom"

const MainChat = () => {
    return (
        <div className="mainchat__wrapper">
            <div><Sidebar /></div>
            <div><ChatRoom /></div>
        </div>
    )
}

export default MainChat