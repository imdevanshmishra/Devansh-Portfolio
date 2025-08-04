/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

// Get the social media links
const facebookLink = document.getElementById('facebook-link');
const twitterLink = document.getElementById('twitter-link');
 const instagramLink = document.getElementById('instagram-link');
const linkedinLink = document.getElementById('linkedin-link');

// Set the URLs for each social media platform
facebookLink.href = 'https://www.facebook.com/profile.php?id=100008646159240&mibextid=PrwyjqcTLlksUAL4';
 twitterLink.href = 'https://x.com/Devansh224122?t=TsJKQoBhSqNRwtw80qkvIQ&s=08';
 instagramLink.href = 'https://www.instagram.com/mai_devansh?igsh=dTA5aTQ1ZzVxM3p4';
linkedinLink.href = 'https://www.linkedin.com/in/devansh-mishraa';

// Add event listeners to open the links in a new tab

// facebookLink.addEventListener('click', () => {
//   window.open(facebookLink.href, '_blank');
// });

// // twitterLink.addEventListener('click', () => {
// //   window.open(twitterLink.href, '_blank');
// // });

// instagramLink.addEventListener('click', () => {
//   window.open(instagramLink.href, '_blank');
// });

// linkedinLink.addEventListener('click', () => {
//   window.open(linkedinLink.href, '_blank');
// });



/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

// Get the download CV button
const downloadCvButton = document.getElementById('download-cv-button');

// Set the URL of the CV file
downloadCvButton.href = 'https://drive.google.com/file/d/1FTi5cGZCDkaXFaDAlDnNOdHi2FbNdYHf/view?usp=sharing';

// Add an event listener to trigger the download
downloadCvButton.addEventListener('click', (event) => {
  // Prevent the default link behavior
  event.preventDefault();

  // Trigger the download
  const link = document.createElement('a');
  link.href = downloadCvButton.href;
  link.download = 'cv.pdf';
  link.click();
});