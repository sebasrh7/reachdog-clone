import React from 'react'

const CardBody = ({ children }) => {
    return (
        <div className="mt-2 flex flex-col gap-1">
            {children}
        </div>
    )
}

export default CardBody