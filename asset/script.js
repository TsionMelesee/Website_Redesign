function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');

    const mainContent = document.querySelector('.fade-in');
    if (navList.classList.contains('active')) {
        mainContent.style.marginTop = navList.offsetHeight + 'px';
    } else {
        mainContent.style.marginTop = '0';
    }
}
