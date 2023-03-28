import { useState } from "react"

const Input = () => {

    const [input, setInput] = useState('')

    return (
        <div className="input__wrapper">
            <input className="input"
                value={input} 
                placeholder="Your message..." 
                onChange={e => setInput(e.target.value)}
            />
            <button className="btn__input-submit">Send</button>
        </div>
    )
}

export default Input