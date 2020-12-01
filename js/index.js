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

links[0].style.color = '#00FF00';
links[1].style.color = '#00FF00';
links[2].style.color = '#00FF00';
links[3].style.color = '#00FF00';
links[4].style.color = '#00FF00';
links[5].style.color = '#00FF00';

const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.href = '#';
document.querySelector('nav').appendChild(blogLink);

const vlogLink = document.createElement('a');
vlogLink.textContent = 'Vlog';
vlogLink.href = '#';
document.querySelector('nav').appendChild(vlogLink);

blogLink.style.color = '#00FF00';
vlogLink.style.color = '#00FF00';

const ctaText = document.querySelector("h1");
ctaText.textContent = siteContent["cta"]["h1"]
ctaText.innerHTML = "DOM <br> IS <br> AWESOME";

const ctaCont= document.querySelector('.cta-text');
const ctaButton = ctaCont.querySelector('button');
ctaButton.textContent = siteContent["cta"]["button"];

const mainSection = document.querySelector('.main-content');

const topCont = mainSection.querySelector('.top-content');
const featTitle = topCont.querySelectorAll('h4');
const featText = topCont.querySelectorAll('p');
featTitle[0].textContent = siteContent["main-content"]["features-h4"];
featText[0].textContent = siteContent["main-content"]["features-content"];

const aboutTitle = topCont.querySelectorAll('h4');
const aboutText = topCont.querySelectorAll('p');
aboutTitle[1].textContent = siteContent["main-content"]["about-h4"];
aboutText[1].textContent = siteContent["main-content"]["about-content"];

const BtmCont = mainSection.querySelector('.bottom-content');
const serTitle = BtmCont.querySelectorAll('h4');
const serText = BtmCont.querySelectorAll('p');
serTitle[0].textContent = siteContent["main-content"]["services-h4"];
serText[0].textContent = siteContent["main-content"]["services-content"];

const proTitle = BtmCont.querySelectorAll('h4');
const proText = BtmCont.querySelectorAll('p');
proTitle[1].textContent = siteContent["main-content"]["product-h4"];
proText[1].textContent = siteContent["main-content"]["product-content"];

const visTitle = BtmCont.querySelectorAll('h4');
const visText = BtmCont.querySelectorAll('p');
visTitle[2].textContent = siteContent["main-content"]["vision-h4"];
visText[2].textContent = siteContent["main-content"]["vision-content"];

const contactSec = document.querySelector('.contact');
const conTitle = contactSec.querySelector('h4');
conTitle.textContent = siteContent["contact"]["contact-h4"];
const conInfo = contactSec.querySelectorAll('p');
conInfo[0].textContent = siteContent["contact"]["address"];
conInfo[0].style.width = '200px';
conInfo[1].textContent = siteContent["contact"]["phone"];
conInfo[2].textContent = siteContent["contact"]["email"];

const copyWright = document.querySelector('footer');
const copyWText = copyWright.querySelector('p');
copyWText.textContent = siteContent["footer"]["copyright"];


