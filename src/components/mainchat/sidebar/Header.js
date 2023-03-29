import { useContext } from "react"
import { auth } from "../../firebase/config"
import {signOut } from 'firebase/auth'

import { AuthContext } from "../../store/AuthProvider"

const Header = () => {

    const data = useContext(AuthContext)
    const { displayName, photoURL } = data

    return (
        <div className="header__wrapper">
            <div className="header__user-info">
                <div className="header__avatar">
                    { photoURL ?
                        <img src={photoURL} alt="AVATAR"/>
                    :
                     <p>{displayName?.charAt(0)}</p>
                    }
                </div>
                <span className="header__name-user">{displayName}</span>
            </div>
            <div className="header__btn-logout" onClick={() => { signOut(auth) }}>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Header