import Sidebar from "./sidebar/Sidebar"
import ChatRoom from "./chatroom/ChatRoom"
import ModalAddRoom from "./sidebar/ModalAddRoom"
import { AppContext } from "../store/AppProvider"

import { useState, useContext } from "react"

const MainChat = () => {

    const data = useContext(AppContext)
    const { showModalRoom } = data

    // const [showModalRoom, setShowModalRoom] = useState(false)
    const [inputModalRoom, setInputModalRoom] = useState({})

    const handleInputDataModalRoom = (data) => {
        setInputModalRoom(data)
    }
    console.log(inputModalRoom)
    console.log(showModalRoom)
    return (
        <div className="mainchat__wrapper">
            <Sidebar />
            <ChatRoom />
            { showModalRoom ? <ModalAddRoom receiveDataFromModalRoom={handleInputDataModalRoom}/> : ""}
        </div>
    )
}

export default MainChat