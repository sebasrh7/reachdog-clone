const ModalContent = ({ children }) => {
    return (
        <div className=" border rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-[#1F1E24] outline-none focus:outline-none border-gray-300 dark:border-[#373A45]">
            {children}
        </div>
    )
}

export default ModalContent;