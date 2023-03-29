
import { createContext, useState } from "react"
export const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [showModalRoom, setShowModalRoom] = useState(false)
    return (
        <AppContext.Provider
            value={{
                showModalRoom,
                setShowModalRoom
            }}    
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider