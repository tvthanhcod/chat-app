import { auth, fbProvider } from '../firebase/config'


import { signInWithPopup } from 'firebase/auth'

const Login = () => {


    const handleLoginWithGG = () => {
       
    }

    const handleLoginWithFB = () => {
        signInWithPopup(auth, fbProvider)
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