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
                <>
                    <div 
                        style={
                            {   width: '100%', 
                                height: '55px', 
                                display: 'flex', 
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                paddingLeft: '20px',
                                backgroundColor: 'pink',
                                color: 'white'
                                
                            }
                        }>Chọn Phòng Chat đê!!!</div>
                </>
            }
        </div>
    )
}

export default ChatRoom