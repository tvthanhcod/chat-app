import { faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Select from "./Select"

const SidebarList = () => {
    return (
        <div className="sidebarlist__wrapper">
            <Select />
            <div className="sidebarlist__addRoom">
                <div className="addRoom__btn">
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