/*==============================================================
    1.0 SELECT DOM ELEMENTS
==============================================================*/

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

const navItems = document.querySelectorAll(".nav-links a");

const navbar = document.querySelector(".navbar");

/*==============================================================
    2.0 MOBILE NAVIGATION
==============================================================*/

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

/*==============================================================
    3.0 CLOSE MENU AFTER CLICKING A LINK
==============================================================*/

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});

/*==============================================================
    4.0 NAVBAR SHADOW ON SCROLL
==============================================================*/

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

/*==============================================================
    5.0 ACTIVE NAVIGATION LINK
==============================================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/*==============================================================
    6.0 SMOOTH SCROLL
==============================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});