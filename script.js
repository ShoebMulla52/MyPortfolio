function showMessage() {
    alert("Thank you for your interest! Please contact me via email.");
}



// Scroll animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("show");
        }
    });
});
