     AOS.init();
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



//toaster options
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-bottom-left",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": 4000,
    "extendedTimeOut": 0,
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut",
    "tapToDismiss": false
};

//email js here
(function () {
    emailjs.init({
        publicKey: "nGUtf4wyueXH-bLEV",
    });
})();
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("entering..1")
    const templeateparam = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        message: document.querySelector('#message').value
    };

    if (templeateparam.email != '' && templeateparam.name != '' && templeateparam.message != '') {
        emailjs.send("service_zwpll05", "template_c51nmfs", templeateparam)
            .then(() => {
                toastr.success("Your Message Successfully Sent <br> Thank You");
            }, (error) => {
                toastr.error("Failed to send message" + JSON.stringify(error))
            });
    }
    else {
        toastr.w    arning('<b>Please Fill All the Field<b>');
    }
});



