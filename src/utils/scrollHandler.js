const handleScroll = () => {
    const tabsHeader = document.getElementById('tabsHeader');
    const navBar = document.getElementById('navBar');
    if (tabsHeader && navBar) { // si existe el elemento tabsHeader y navBar en el DOM
        const navBarHeight = navBar.offsetHeight; 
        const tabsHeaderTop = tabsHeader.offsetTop; // obtener la posición top del tabsHeader
        const scrollY = window.scrollY + navBarHeight + 1;
        if (scrollY > tabsHeaderTop) {
            tabsHeader.classList.add('tabs-header');
        } else {
            // remove 
            tabsHeader.classList.remove('tabs-header');
        }
    }
};

export default handleScroll;