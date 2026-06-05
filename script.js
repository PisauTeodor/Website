document.addEventListener("DOMContentLoaded", () => {

const phrases = [
"Student la informatica",
"Dezvoltator software in devenire",
"Entuziast web",
];

const heroText = document.querySelector(".hero p");
let phraseIndex = 0;

function typeWriter(text) {
let i = 0;
heroText.textContent = "";

function typing() {
if (i < text.length) {
heroText.textContent += text.charAt(i);
i++;
setTimeout(typing, 70);
}
}

typing();
}

function nextPhrase() {
typeWriter(phrases[phraseIndex]);

phraseIndex = (phraseIndex + 1) % phrases.length;

setTimeout(nextPhrase, 3500);
}

nextPhrase();

/* --------------------------
FADE IN ON SCROLL
---------------------------*/

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("show");
}
});
}, { threshold: 0.15 });

hiddenElements.forEach(el => observer.observe(el));

/* --------------------------
SKILLS ANIMATION
---------------------------*/

const skills = document.querySelectorAll(".skills span");

skills.forEach((skill, index) => {
skill.style.opacity = "0";
skill.style.transform = "translateY(20px)";

setTimeout(() => {
skill.style.transition = ".5s";
skill.style.opacity = "1";
skill.style.transform = "translateY(0)";
}, index * 150);
});

/* --------------------------
NAVBAR ACTIVE LINKS
---------------------------*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {
const sectionTop = section.offsetTop;

if (pageYOffset >= sectionTop - 200) {
current = section.getAttribute("id");
}
});

navLinks.forEach(link => {
link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {
link.classList.add("active");
}
});

});

/* --------------------------
PARTICLES BACKGROUND
---------------------------*/

if (typeof particlesJS !== "undefined") {

particlesJS("particles-js", {

particles: {
number: { value: 60 },
color: { value: "#8b5cf6" },
shape: { type: "circle" },
opacity: { value: 0.4 },
size: { value: 3, random: true },
line_linked: {
enable: true,
distance: 150,
color: "#8b5cf6",
opacity: 0.3
},
move: {
enable: true,
speed: 2
}
}

});

}

});