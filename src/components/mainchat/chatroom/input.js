import { useState } from "react"
import { serverTimestamp } from  'firebase/firestore'

import { AuthContext } from "../../store/AuthProvider" 
import { useContext } from "react"
import { AppContext } from "../../store/AppProvider"
import { addCollection } from "../../firebase/services"

const Input = () => {

    const { uid, displayName, photoURL } = useContext(AuthContext)
    const { selectedRoom } = useContext(AppContext)

    const [input, setInput] = useState('')

    const handleSubmitMess = () => {
        if(input !== '') {
            const data = {
                content: input,
                uid: uid,
                photoURL: photoURL,
                displayName: displayName,
                roomId: selectedRoom.id,
                createAt: serverTimestamp()
            }
            addCollection('messages', data)
            setInput('')
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleSubmitMess()
        }
      }

    return (
        <div className="input__wrapper">
            <input className="input"
                value={input} 
                placeholder="Your message..." 
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => handleKeyDown(e)}
            />
            <button className="btn__input-submit" onClick={() => handleSubmitMess()}>Send</button>
        </div>
    )
}

export default Input