// To load particle js here
particlesJS.load('particles-js', 'particlesjs-config.json', function () {
    console.log('particles-js config loaded');
});

//Handling the scroll for canvas
document.querySelectorAll('.offcanvas-body a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        const offcanvas = document.getElementById('offcanvasRight');
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);

        // Close offcanvas first
        bsOffcanvas.hide();

        // Scroll after offcanvas is hidden
        offcanvas.addEventListener('hidden.bs.offcanvas', function handler() {
            target.scrollIntoView({ behavior: 'smooth' });
            offcanvas.removeEventListener('hidden.bs.offcanvas', handler);
        });
    });
});

//showing scroll to top button  
const gotoTop_btn = document.querySelector('.go-to-top')
const about_us_section = document.querySelector('.about-us');
var heightofaboutus = about_us_section.offsetTop;
console.log(heightofaboutus);

window.onscroll = () => {
    if (document.body.scrollTop > (heightofaboutus / 2) || document.documentElement.scrollTop > (heightofaboutus / 2)) {
        gotoTop_btn.classList.add('show');
    }
    else {
        gotoTop_btn.classList.remove('show');
    }
}


