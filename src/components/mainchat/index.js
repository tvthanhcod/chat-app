import Sidebar from "./sidebar/Sidebar"
import ChatRoom from "./chatroom/ChatRoom"
import ModalAddRoom from "./sidebar/ModalAddRoom"
import ModalInviteUser from "./chatroom/ModalInviteUser"
import { AppContext } from "../store/AppProvider"

import { useContext } from "react"

const MainChat = () => {

    const data = useContext(AppContext)
    const { showModalRoom, showModalInvite } = data

    return (
        <div className="mainchat__wrapper">
            <Sidebar />
            <ChatRoom />
            { showModalRoom && <ModalAddRoom /> }
            { showModalInvite && <ModalInviteUser />}

        </div>
    )
}

export default MainChat