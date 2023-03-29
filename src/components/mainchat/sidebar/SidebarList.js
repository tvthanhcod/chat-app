import { faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Select from "./Select"
import { AppContext } from "../../store/AppProvider"
import { useContext } from "react"

const SidebarList = () => {
    const { setShowModalRoom } = useContext(AppContext)
    return (
        <div className="sidebarlist__wrapper">
            <Select />
            <div className="sidebarlist__addRoom">
                <div className="addRoom__btn" onClick={() => setShowModalRoom(true)}>
                    <span>
                        <FontAwesomeIcon icon={faSquarePlus} />
                    </span>
                    Thêm phòng
                </div>
            </div>
        </div>
    )
}

export default SidebarList