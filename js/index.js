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

// -------Header Section------ //
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItem = document.getElementsByTagName('a');
navItem[0].textContent = siteContent["nav"]["nav-item-1"]
navItem[1].textContent = siteContent["nav"]["nav-item-2"]
navItem[2].textContent = siteContent["nav"]["nav-item-3"]
navItem[3].textContent = siteContent["nav"]["nav-item-4"]
navItem[4].textContent = siteContent["nav"]["nav-item-5"]
navItem[5].textContent = siteContent["nav"]["nav-item-6"]

// -------End of Header Section------ //


// --------CTA Section------- //

let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

let ctaH1 = document.querySelector('.cta-text h1')
ctaH1.style.whiteSpace = 'pre';
ctaH1.textContent = (`DOM\n Is\n Awesome`);

let ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = (`Get Started`);

// --------End of CTA Section------- //


// --------Main-Content Section------- //

// --------- Top-Content Section ---------//

let topContentTitle1 = document.querySelectorAll(".top-content .text-content h4")[0];
topContentTitle1.textContent = siteContent["main-content"]["features-h4"]

let featuresText = document.querySelectorAll(".top-content .text-content p") [0];
featuresText.textContent = siteContent["main-content"]["features-content"]

let topContentTitle2 = document.querySelectorAll(".top-content .text-content h4")[1];
topContentTitle2.textContent = siteContent["main-content"]["about-h4"]

let aboutText = document.querySelectorAll(".top-content .text-content p")[1];
aboutText.textContent = siteContent['main-content']["about-content"]

// --------- End of Top-Content Section ---------//

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


// ---------- Bottom-Content Section ------------//

const btmContentTitle1 = document.querySelectorAll(".bottom-content .text-content h4")[0];
btmContentTitle1.textContent = siteContent["main-content"]["services-h4"]

const servicesText = document.querySelectorAll(".bottom-content .text-content p")[0];
servicesText.textContent = siteContent["main-content"]["services-content"]

const btmContentTitle2 = document.querySelectorAll(".bottom-content .text-content h4")[1];
btmContentTitle2.textContent = siteContent["main-content"]["product-h4"]

const productText = document.querySelectorAll(".bottom-content .text-content p")[1];
productText.textContent = siteContent["main-content"]["product-content"]

const btmContentTitle3 = document.querySelectorAll(".bottom-content .text-content h4")[2];
btmContentTitle3.textContent = siteContent["main-content"]["vision-h4"]

const visionText = document.querySelectorAll(".bottom-content .text-content p")[2];
visionText.textContent = siteContent["main-content"]["vision-content"]

// ---------- End of Bottom-Content Section ------------//

// --------End of Main-Content Section------- //



// -------- Contact Section ---------- //

const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"]

const contactText1 = document.querySelectorAll(".contact p")[0];
contactText1.textContent = siteContent["contact"]["address"]

const contactText2 = document.querySelectorAll(".contact p")[1];
contactText2.textContent = siteContent["contact"]["phone"]

const contactText3 = document.querySelectorAll(".contact p")[2];
contactText3.textContent = siteContent["contact"]["email"]

// -------- End of Contact Section ---------- //