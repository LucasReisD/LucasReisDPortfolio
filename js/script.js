/* =========================================================
   LUCAS REIS — PORTFOLIO
   Main JavaScript
========================================================= */

"use strict";


/* =========================================================
   ELEMENTS
========================================================= */

const html = document.documentElement;

const themeToggle =
    document.getElementById("themeToggle");

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");

const year =
    document.getElementById("year");


/* =========================================================
   CURRENT YEAR
========================================================= */

if (year) {
    year.textContent =
        new Date().getFullYear();
}


/* =========================================================
   THEME
========================================================= */

const savedTheme =
    localStorage.getItem("lucas-theme");


if (savedTheme) {

    html.dataset.theme =
        savedTheme;

}


function updateThemeIcon() {

    if (!themeToggle) return;

    const isDark =
        html.dataset.theme === "dark";

    themeToggle.textContent =
        isDark ? "☼" : "☾";

}


updateThemeIcon();


themeToggle?.addEventListener(
    "click",
    () => {

        const current =
            html.dataset.theme;

        const next =
            current === "dark"
                ? "light"
                : "dark";

        html.dataset.theme =
            next;

        localStorage.setItem(
            "lucas-theme",
            next
        );

        updateThemeIcon();

    }
);


/* =========================================================
   MOBILE MENU
========================================================= */

menuToggle?.addEventListener(
    "click",
    () => {

        const isOpen =
            navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    }
);


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "open"
                );

                menuToggle?.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".about-main, " +
        ".fact, " +
        ".experience-card, " +
        ".project-card, " +
        ".skill-group, " +
        ".contact-card"
    );


revealElements.forEach(
    element => {

        element.classList.add(
            "reveal"
        );

    }
);


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }
            );

        },
        {
            threshold: 0.12,
            rootMargin:
                "0px 0px -40px 0px"
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }

                    const id =
                        entry.target.id;

                    navigationLinks.forEach(
                        link => {

                            const active =
                                link.getAttribute(
                                    "href"
                                ) === `#${id}`;

                            link.style.color =
                                active
                                    ? "var(--text)"
                                    : "";

                        }
                    );

                }
            );

        },
        {
            rootMargin:
                "-35% 0px -55% 0px"
        }
    );


sections.forEach(
    section => {

        sectionObserver.observe(
            section
        );

    }
);


/* =========================================================
   IMAGE FALLBACK
========================================================= */

const profileImage =
    document.querySelector(
        ".profile-image img"
    );


profileImage?.addEventListener(
    "error",
    () => {

        profileImage.style.display =
            "none";

        const container =
            profileImage.parentElement;

        container.innerHTML =
            `<span
                style="
                    display:grid;
                    place-items:center;
                    width:100%;
                    height:100%;
                    color:var(--primary);
                    font-family:var(--font-display);
                    font-size:5rem;
                    font-weight:700;
                "
            >
                LR
            </span>`;

    }
);


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );

                if (
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    });


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "%cLucas Reis — Portfolio",
    `
        font-size: 18px;
        font-weight: bold;
        color: #5b7cff;
    `
);

console.log(
    "%cSuporte Técnico · Infraestrutura · Desenvolvimento",
    `
        color: #737b89;
        font-size: 12px;
    `
);