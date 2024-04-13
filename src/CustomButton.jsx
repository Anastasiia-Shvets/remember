const CustomButton = ({ message, children }) => {
    return (
        <button onClick={message}>{children}</button>
    )
}
export default CustomButton