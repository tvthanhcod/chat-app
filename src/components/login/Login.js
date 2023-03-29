import { auth, fbProvider } from '../firebase/config'


import { signInWithPopup, getAdditionalUserInfo,  } from 'firebase/auth'

import { addCollection } from '../firebase/services'


const Login = () => {


    const handleLoginWithGG = () => {
       
    }

    const handleLoginWithFB = async() => {
       const data = await signInWithPopup(auth, fbProvider)
       const { isNewUser, profile, providerId} = getAdditionalUserInfo(data)
       const { email, name, id, picture } = profile

       if( isNewUser ) {
            const data = {
                displayName: name,
                email: email,
                photoURL: picture.data.url,
                uid: id,
                providerId: providerId
            }
            addCollection('users', data)
       }
    }

    return (
        <div className="login__wrapper">
            <div className="login__title">Welcome My Princess</div>
            <div className="login__button-wrapper">
                <button className="Login__button-item btn-gg" onClick={handleLoginWithGG}>Login With Google</button>
                <button className="Login__button-item btn-fb" onClick={handleLoginWithFB}>Login With FaceBook</button>
            </div>
        </div>
    )
}
export default Login