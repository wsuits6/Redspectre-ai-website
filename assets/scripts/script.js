// === RedSpectre AI - Dynamic Page Effects ===

// 1. Terminal Typing Simulation
document.addEventListener("DOMContentLoaded", () => {
  const lines = [
    "Initializing AI core...",
    "> Loading modules...",
    "> Modules loaded successfully.",
    "> Starting documentation engine...",
    "> Report generation in progress...",
    "root@RedSpectre:~#"
  ];

  const terminalBody = document.querySelector(".terminal-body");
  if (terminalBody) {
    terminalBody.innerHTML = ""; // clear default text

    let i = 0;
    function typeLine() {
      if (i < lines.length) {
        const line = document.createElement("div");
        line.classList.add("line");
        line.innerHTML = `<span class="prompt">root@RedSpectre:</span>~# ${lines[i]}`;
        terminalBody.appendChild(line);
        terminalBody.scrollTop = terminalBody.scrollHeight;
        i++;
        setTimeout(typeLine, 900); // typing delay
      } else {
        const cursor = document.createElement("span");
        cursor.classList.add("cursor");
        cursor.textContent = "█";
        terminalBody.appendChild(cursor);
      }
    }
    typeLine();
  }
});

// 2. Smooth Scroll Reveal Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// 3. Hero Parallax Logo Effect
const heroLogo = document.querySelector(".hero-illustration img");
if (heroLogo) {
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 60;
    const y = (window.innerHeight / 2 - e.pageY) / 60;
    heroLogo.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  });
}

// 4. Glow Pulse for CTA Buttons
const ctas = document.querySelectorAll(".cta");
ctas.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 0 10px rgba(255, 0, 80, 0.6)";
    btn.style.transform = "translateY(-3px)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
    btn.style.transform = "translateY(0)";
  });
});


const header = document.querySelector(".header");
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

if (toggle) {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
}


// Dynamic Logo Motion (RedSpectre AI Hero)
const logo = document.getElementById("hero-logo");
let angle = 0;
let time = 0;

// Random floating & rotation
function animateLogo() {
  time += 0.015;

  // Create a smooth oscillating movement
  const x = Math.sin(time) * 15;      // horizontal drift
  const y = Math.cos(time * 1.5) * 20; // vertical drift
  const rot = Math.sin(time * 0.8) * 5; // gentle rotation

  // Apply transform dynamically
  logo.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg) scale(1.05)`;

  // Create a glowing pulse effect
  const glow = 0.4 + 0.6 * Math.abs(Math.sin(time * 2));
  logo.style.filter = `drop-shadow(0 0 ${15 * glow}px rgba(255, 0, 150, ${glow}))`;

  requestAnimationFrame(animateLogo);
}
animateLogo();

// Interactive movement with mouse
document.querySelector('.hero').addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX - innerWidth / 2) / innerWidth;
  const y = (e.clientY - innerHeight / 2) / innerHeight;
  logo.style.transform += `translate(${x * 10}px, ${y * 10}px)`;
});
