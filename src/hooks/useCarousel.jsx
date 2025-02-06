import { useState } from 'react';

const useCarousel = (initialIndex) => {
    const [selectedIndex, setSelectedIndex] = useState(initialIndex);

    const handleIndicatorClick = (index) => {
        setSelectedIndex(index);
    };

    return { selectedIndex, handleIndicatorClick };
};

export default useCarousel;