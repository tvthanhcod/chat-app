import HeaderChatRoom from "./HeaderChatRoom"
import Input from "./input"
import Message from "./Message"
import { useContext } from "react"
import { AppContext } from "../../store/AppProvider"

const ChatRoom = () => {

    const { selectedRoom } = useContext(AppContext)
    const { messages } = useContext(AppContext)

    return (
        <div className="chatroom__wrapper">
            { selectedRoom.id ? 
                <>
                    <HeaderChatRoom roomInfo={selectedRoom}/>
                    <div className="message__box">
                        { messages && messages.length > 0 && messages.map((mess, index) => {
                            return (
                                <Message key={index} data={mess}/>
                            )
                        })}
                    </div>
                    <Input />
                </>
                :
                <>Chọn Phòng Chat đê!!!</>
            }
        </div>
    )
}

export default ChatRoom