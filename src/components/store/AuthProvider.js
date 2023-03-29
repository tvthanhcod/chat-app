import { createContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase/config'
import { useHistory } from "react-router-dom"
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const history = useHistory()
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUserData(user)
                history.push("/")
                return
            }
            history.push("/login")
        })

        return () => {
            unSubcribe()
        }
    },[history])


    return (
       <AuthContext.Provider value={userData}>
                { children }
       </AuthContext.Provider>
    )
}

export default AuthProvider