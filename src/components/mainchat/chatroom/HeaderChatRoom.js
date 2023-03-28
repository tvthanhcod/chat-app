import Tooltip from "./Tooltip"


const HeaderChatRoom = () => {
    return (
        <div className="headerchatroom__wrapper">
            <div className="headerchatroom__info">
                <div className="name__room">Room 1</div>
                <div className="description__room">This is room 1</div>
            </div>
            <div className="memberofroom">
                <button className="invite_user">Mời</button>
                <div className="member__box">
                    <Tooltip title="T">
                        <div className="header__avatar">T</div>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default HeaderChatRoom