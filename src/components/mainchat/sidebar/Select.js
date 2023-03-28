import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Select = () => {
    return (
        <div className="select__wrapper">
            <div className="select__box">
                    <p>Danh sách phòng</p>
                    <span>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </span>

                    <ul className="select__option">
                        <li className="select__option-item">Room 1</li>
                        <li className="select__option-item">Room 2</li>
                        <li className="select__option-item">Room 3</li>
                        <li className="select__option-item">Room 4</li>
                    </ul>
             </div>
        </div>
    )
}

export default Select