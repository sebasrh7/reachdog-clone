const formatPrice = (price, discountPercentage) => {
    return `$${(price + (price * discountPercentage) / 100).toFixed(0)}`;
};

export default formatPrice;