const changeBodyOverflow = (action) => {
    if (window.innerWidth > 768) {
        if (action === 'hidden') {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '20px';
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0px';
        }
    } else {
        if (action === 'hidden') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
};

export default changeBodyOverflow;