import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AppContext } from "../../store/AppProvider"
import { useContext } from "react"

const Select = () => {

    const { rooms, setSelectedRoomId } = useContext(AppContext)

    return (
        <div className="select__wrapper">
            <div className="select__box">
                    <p>Danh sách phòng</p>
                    <span>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </span>

                    <ul className="select__option">
                        { rooms !== undefined && rooms.length > 0 ? rooms.map(room => {
                            return (
                                <li key={room.id} className="select__option-item" onClick={() => setSelectedRoomId(room.id)}>{room.name}</li>
                            )
                        })
                        :
                        <></>
                        }
                    </ul>
             </div>
        </div>
    )
}

export default Select