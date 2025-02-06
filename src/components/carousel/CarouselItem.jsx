const CarouselItem = ({ selectedImage }) => {
    return (
        <img
            src={selectedImage}
            alt="Product"
            className="object-contain rounded-2xl aspect-square sm:w-[300px] max-w-[300px] w-full"
            loading="lazy"
        />
    );
};

export default CarouselItem