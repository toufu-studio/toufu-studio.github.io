const button = document.querySelector(".enter-button");
const cursor = document.querySelector(".cursor");
const scrollElement = document.getElementById('about');
const target = scrollElement.getBoundingClientRect();
const targetTop = target.top + window.pageYOffset;
gsap.registerPlugin(ScrambleTextPlugin)

if (button) {
    button.addEventListener("click", () => {
        document.documentElement.classList.add("glitch");

        setTimeout(() => {
            window.scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });
        }, 2000);

        setTimeout(() => {
            document.documentElement.classList.remove("glitch");
        }, 2000);

        setTimeout(() => {
            cursor.style.animation = "blink 1s step-start infinite";
        }, 1500);

        gsap.to(".scramble", {
            duration: 1.5,
            scrambleText: {
                text: "Thank you for visiting.",
            }
        });

        const element = document.querySelector(".typewriter");
        element.textContent = "";
        cursor.style.animation = "none";
        typeWriter(element, "Welcome :)", 1);
    });
}