const CarouselItem = ({ selectedImage }) => {
    return (
        <img
            src={selectedImage}
            alt="Product"
            className="object-cover rounded-2xl aspect-square mx-auto h-full w-full"
            loading="lazy"
        />
    );
};

export default CarouselItem