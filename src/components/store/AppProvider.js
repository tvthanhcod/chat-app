
import { createContext, useState, useMemo, useContext } from "react"
import { useFireStore, useFireStoreMessage } from "../firebase/services"
import { AuthContext } from "./AuthProvider"

export const AppContext = createContext()

const AppProvider = ({ children }) => {
    const { uid } = useContext(AuthContext)
    const [showModalRoom, setShowModalRoom] = useState(false)
    const [selectedRoomId, setSelectedRoomId] = useState('')

    /* get data rooms */
    const roomCondition = useMemo(() => {
        return {
            filedName: 'members',
            operator: 'array-contains',
            value: uid
        }
    },[uid])

    const rooms = useFireStore('rooms', roomCondition)

    const selectedRoom = useMemo(() => {
        return rooms.find((room) => room.id === selectedRoomId) || {}
    }, [rooms, selectedRoomId])

    /* get data members */

    const userCondition = useMemo(() => {
        return {
            filedName: 'uid',
            operator: 'in',
            value: selectedRoom.members
        }
    },[selectedRoom.members])

    const members = useFireStore('users', userCondition)

    /* get data mess */

    const messCondition = useMemo(() => {
        return {
            filedName: 'roomId',
            operator: '==',
            value: selectedRoom.id
        }
    },[selectedRoom.id])

    const messages = useFireStoreMessage('messages', messCondition)

    return (
        <AppContext.Provider
            value={{
                rooms,
                selectedRoom,
                showModalRoom,
                setShowModalRoom,
                selectedRoomId, 
                setSelectedRoomId,
                members,
                messages
            }}    
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider