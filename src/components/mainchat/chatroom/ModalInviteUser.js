import { useState, useEffect, useContext, useMemo } from "react"
import { readDocs } from "../../firebase/services"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

// import { AuthContext } from "../../store/AuthProvider"
import { AppContext } from "../../store/AppProvider"
import { db } from "../../firebase/config"
import { updateDoc, doc } from 'firebase/firestore'


const ModalInviteUser = () => {

    // const { uid } = useContext(AuthContext)
    const { setShowModalInvite, selectedRoomId, selectedRoom} = useContext(AppContext)

    const [userInput, setUserInput] = useState('')
    const [userSuggest, setUserSuggest] = useState([])
    const [userSelected, setUserSelected] = useState([])

    const userConditionWithKeyword = useMemo(() => {
        return {
            filedName: 'keywords',
            operator: 'array-contains',
            value: userInput
        }
    },[userInput])
    /* debounce */
    useEffect(() => {
        const timerId = setTimeout(async() => {
            const data = await readDocs('users', userConditionWithKeyword)
            // const docsUser = data.filter(user => user.uid !== uid)
            setUserSuggest(data)
        }, 1500)
        // setUserSuggest(data)

        return (
            () => clearTimeout(timerId)
        )
    }, [userInput, userConditionWithKeyword])

    const updateDocuments = async() => {
        const docRef = doc(db, 'rooms', selectedRoomId)
        await updateDoc(docRef, {
            members: [...selectedRoom.members, ...userSelected.map(user => user.userId)]
        })
    }

    const handleSelectedUser = (userId, userName) => {
        const data = {
            userId,
            userName
        }
        setUserSelected((prev) => {
            if(prev !== undefined) {
                const lastselectedUser = prev.length - 1
                if(prev[lastselectedUser] && prev[lastselectedUser].userId !== data.userId) {
                    return [...prev, data]
                }
            }
            return [...prev, data]
        })
    }

    const removeUserSelected = (id) => {
        setUserSelected((prev) => {
            return prev.filter(user => user.userId !== id)
        })
    }

    const resetData = () => {
        setUserInput('')
        setShowModalInvite(false)
    }

    const handleData = async() => {
        if(userSelected && userSelected.length > 0) {
           updateDocuments()
           setUserInput('')
           setShowModalInvite(false)
        }
    }

    return (
        <div className="modal__wrapper">
            <div className="modal__shadow">
                <div className="modalInvite__content">
                    <div className="modalInvite__item">
                        <span>Name User: </span>
                        <input 
                            value={userInput} 
                            placeholder="Enter user..."
                            onChange={e => setUserInput(e.target.value)}
                        />
                    </div>
                    <ul className="user__suggest-list">
                            { userSuggest && userSuggest.length > 0 && userSuggest.map((user) => {
                                const { uid, displayName, photoURL } = user
                                return (
                                <li key={uid} className="user__suggest-item" onClick={() => handleSelectedUser(uid, displayName)}>
                                    <div className="headerInvite__avatar">
                                        { photoURL ?
                                            <img src={photoURL} alt="AVATAR"/>
                                        :
                                            <p>{displayName?.charAt(0)}</p>
                                        }
                                    </div>
                                    <span className="headerInvite__name-user">{displayName}</span>
                                </li>
                                )
                            })
                            }
                        </ul>
                    <div className="result__user">
                            { userSelected && userSelected.length > 0 && userSelected.map((user, index) => {
                                return (
                                    <div key={index} className="result__user-item">
                                        <p>{user.userName}</p>
                                        <div className="icon-delete" onClick={() => removeUserSelected(user.userId)}>
                                            <FontAwesomeIcon icon={faTrash}/>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                    <div className="modal__btn-box">
                        <button className="modal__btn btn__cancel" onClick={() => resetData()}>Cancel</button>
                        <button className="modal__btn btn__ok" onClick={handleData}>OK</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalInviteUser