import Tooltip from "./Tooltip"
import { useContext } from "react"
import { AppContext } from "../../store/AppProvider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"


const HeaderChatRoom = ({ roomInfo }) => {

    const { members } = useContext(AppContext)
    const { setShowModalInvite } = useContext(AppContext)
    
    return (
        <div className="headerchatroom__wrapper">
            <div className="headerchatroom__info">
                <div className="name__room">{roomInfo.name}</div>
                <div className="description__room">{roomInfo.description}</div>
            </div>
            <div className="memberofroom">
                <button className="invite_user" onClick={() => setShowModalInvite(true)}>
                    <FontAwesomeIcon icon={faUserPlus}/>
                </button>
                <div className="member__box">
                    {members.map(member => {
                        const { uid, displayName, photoURL } = member
                        return (
                            <Tooltip key={uid} title={displayName}>
                                <div className="header__avatar">
                                    { photoURL ?
                                        <img src={photoURL} alt="AVATAR"/>
                                    :
                                        <p>{displayName?.charAt(0)}</p>
                                    }
                                </div>
                            </Tooltip>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HeaderChatRoom