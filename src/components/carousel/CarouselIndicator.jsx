const CarouselIndicator = ({ active, onClick }) => {
    return (
        <button
            className={`w-3 h-3 rounded-full ${active ? 'bg-green-400' : 'bg-gray-400'}`}
            onClick={onClick}
        ></button>
    )
}

export default CarouselIndicator