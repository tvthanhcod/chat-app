

const Tooltip = ({ title, children }) => {
    return (
        <>
            <div className="tooltip__wrapper">
                {children}
                <div className="tooltip__title">
                    {title}
                </div>
            </div>
        </>
        
    )
}

export default Tooltip