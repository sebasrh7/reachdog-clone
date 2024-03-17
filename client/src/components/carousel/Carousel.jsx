import useCarousel from '../../hooks/useCarousel';
import { CarouselItem, CarouselIndicator } from './index.carousel';

const Carousel = ({ images }) => {

    const { selectedIndex, handleIndicatorClick } = useCarousel(0);

    return (

        <div className="relative ">
            <CarouselItem selectedImage={images[selectedIndex]} />
            <div className="flex justify-center space-x-3 pt-4">
                {images.map((_, index) => (
                    <CarouselIndicator
                        key={index}
                        active={index === selectedIndex}
                        onClick={() => handleIndicatorClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel