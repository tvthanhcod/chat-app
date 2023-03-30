import { formatRelative } from 'date-fns/esm'

const Message =  ({ data }) => {

    const { displayName, photoURL, content, createAt } = data

    const formatdate = (seconds) => {
        let format = ''
        if(seconds) {
            format = formatRelative(new Date(seconds * 1000), new Date())
        }
        format = format.charAt(0).toUpperCase() + format.slice(1)

        return format
    }

    return (
        <div className="message__wrapper">
            <div className="message__avatar">
                { photoURL ?
                        <img src={photoURL} alt="AVATAR"/>
                    :
                     <p>{displayName?.charAt(0)}</p>
                    }
                </div>
            <div>
                <div className="mess__name-box">
                    <div className="mess__displayName">{displayName}</div>
                    <span className="mess__createAt">{formatdate(createAt?.seconds)}</span>
                </div>
                <div className="mess__text">{content}</div>
                {/* <div className="createAt">Today, 9 am</div> */}
            </div>
        </div>
    )
}

export default Message