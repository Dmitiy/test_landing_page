(() => {
    const pageContainer = document.querySelector('.page');
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    const topOfHeader = header.offsetTop;
    const helperDiv = header.offsetHeight + 'px';
    const newDiv = document.createElement("div");

    newDiv.style.height = helperDiv;

    // sticky-header
    const stickyHeader = () => {

        if (window.scrollY > topOfHeader) {
            pageContainer.classList.add('position--relative');
            pageContainer.insertBefore(newDiv, main);
            header.classList.add('position--fixed');
        } else {
            pageContainer.classList.remove('position--relative');
            pageContainer.removeChild(newDiv);
            header.classList.remove('position--fixed');
        }
    }

    window.addEventListener('scroll', stickyHeader);

})()