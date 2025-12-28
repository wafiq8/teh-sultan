document.querySelector('.cta-button').addEventListener('click', function () {
    alert('Terima kasih! Kami akan segera melayani Anda 🙏');
});
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    reveals.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
