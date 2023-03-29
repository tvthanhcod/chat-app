import { useState, useContext } from "react"
import { AppContext } from "../../store/AppProvider"

const ModalAddRoom = ({ receiveDataFromModalRoom  }) => {

    const { setShowModalRoom } = useContext(AppContext)

    const [inputName, setInputName] = useState('')
    const [inputDescription, setInputDescription] = useState('')

    const resetData = () => {
        setInputName('')
        setInputDescription('')
        setShowModalRoom(false)
    }

    const handleDataInput = () => {
        const data = {
            name: inputName,
            description: inputDescription
        }

        receiveDataFromModalRoom(data)
        resetData()
    }

    return (
        <div className="modal__wrapper">
            <div className="modal__shadow">
                <div className="modalRoom__content">
                    <div className="modalRoom__item">
                        <span>Name Room: </span>
                        <input 
                            value={inputName} 
                            placeholder="Enter room name..."
                            onChange={e => setInputName(e.target.value)}
                        />
                    </div>
                    <div className="modalRoom__item">
                        <span>Description: </span>
                        <input 
                            value={inputDescription} 
                            placeholder="Enter description..."
                            onChange={e => setInputDescription(e.target.value)}
                        />
                    </div>
                    <div className="modal__btn-box">
                        <button className="modal__btn btn__cancle" onClick={() => resetData()}>CANCLE</button>
                        <button className="modal__btn btn__ok" onClick={handleDataInput}>OK</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAddRoom