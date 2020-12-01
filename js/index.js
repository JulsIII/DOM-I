const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const links = document.querySelectorAll('nav a');
links[0].textContent = siteContent['nav']['nav-item-1'];
links[1].textContent = siteContent['nav']['nav-item-2'];
links[2].textContent = siteContent['nav']['nav-item-3'];
links[3].textContent = siteContent['nav']['nav-item-4'];
links[4].textContent = siteContent['nav']['nav-item-5'];
links[5].textContent = siteContent['nav']['nav-item-6'];

// const header = document.querySelector('header');

const ctaText = document.querySelector("h1");
ctaText.textContent = siteContent["cta"]["h1"]
ctaText.innerHTML = "DOM <br> IS <br> AWESOME";

const ctaCont= document.querySelector('.cta-text');
const ctaButton = ctaCont.querySelector('button');
ctaButton.textContent = siteContent["cta"]["button"];


const mainSection = document.querySelector('.main-content');
const topCont = mainSection.querySelector('.top-content');

const textOneA = topCont.querySelector('.text-content');
const hachFourA = textOneA.querySelector('h4');
const pEEA = textOneA.querySelector('p');
hachFourA.textContent = siteContent["main-content"]["features-h4"];
pEEA.textContent = siteContent["main-content"]["features-content"];



const hachFourB = topCont.querySelectorAll('h4');
const pEEB = topCont.querySelectorAll('p');
hachFourB[1].textContent = siteContent["main-content"]["about-h4"];
pEEB[1].textContent = siteContent["main-content"]["about-content"];


// const hachFourB = hachFourA.nextElementSibling;
// const pEEB = hachFourB.nextElementSibling;
// const secondconT = textOneA.cloneNode(true);
// document.querySelector('.text-content').appendChild(secondconT);

// querySelector('h4');
// const pEEB = textOneB.querySelector('p');


// const BtmCont = mainSection.querySelector('.bottom-content');
// const textOneB = BtmCont.querySelector('.text-content');
// const textOne
// const contactSec = document.querySelector('.contact');
// const contactSec = document.querySelector('footer');
// const button = document.querySelector('button');