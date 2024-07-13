document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;

        if (accordionItem.classList.contains('active')) {
            accordionItem.classList.remove('active');
        } else {
            document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));
            accordionItem.classList.add('active');
        }
    });
});

$(document).ready(function () {
    $('.collapse').collapse('hide');
    $('#collapseSkills').collapse('show');
});
