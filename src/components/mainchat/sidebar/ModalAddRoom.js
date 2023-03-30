import { useState, useContext } from "react"
import { AppContext } from "../../store/AppProvider"
import { auth } from "../../firebase/config"

import { addCollection } from "../../firebase/services"

const ModalAddRoom = () => {

    const { setShowModalRoom } = useContext(AppContext)

    const [inputName, setInputName] = useState('')
    const [inputDescription, setInputDescription] = useState('')

    const { uid } = auth.currentUser

    const resetData = () => {
        setInputName('')
        setInputDescription('')
        setShowModalRoom(false)
    }

    const handleDataInput = () => {
        if(inputName !== '' && inputDescription !== '') {
            const data = {
                name: inputName,
                description: inputDescription,
                members: [uid]
            }
    
            addCollection('rooms', data)
            resetData()
            return
        }
        alert('input initvalue!!!')
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
                        <button className="modal__btn btn__cancel" onClick={() => resetData()}>Cancel</button>
                        <button className="modal__btn btn__ok" onClick={handleDataInput}>OK</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAddRoom