import Sidebar from "./sidebar/Sidebar"
import ChatRoom from "./chatroom/ChatRoom"
import ModalAddRoom from "./sidebar/ModalAddRoom"
import { AppContext } from "../store/AppProvider"

import { useContext } from "react"

const MainChat = () => {

    const data = useContext(AppContext)
    const { showModalRoom } = data

    return (
        <div className="mainchat__wrapper">
            <Sidebar />
            <ChatRoom />
            { showModalRoom && <ModalAddRoom /> }
        </div>
    )
}

export default MainChat