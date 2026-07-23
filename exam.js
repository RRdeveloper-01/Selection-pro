/*=========================
  TAB SWITCHING
=========================*/

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {

button.addEventListener("click",()=>{

tabButtons.forEach(btn=>btn.classList.remove("active"));

tabContents.forEach(content=>content.classList.remove("active"));

button.classList.add("active");

document
.getElementById(button.dataset.tab)
.classList.add("active");

window.scrollTo({
top:document.querySelector(".tabs-section").offsetTop-80,
behavior:"smooth"
});

});

});

/*=========================
 DEFAULT TAB
=========================*/

document.addEventListener("DOMContentLoaded",()=>{

document.querySelector('[data-tab="test-series"]').click();

});

/*=========================
 COMING SOON ALERT
=========================*/

document.querySelectorAll(".coming").forEach(item=>{

item.addEventListener("click",(e)=>{

e.preventDefault();

Swal.fire({

title:"Coming Soon",

text:"This paper will be uploaded soon.",

imageUrl:"logo.jpeg",

imageWidth:90,

imageHeight:90,

confirmButtonText:"OK",

confirmButtonColor:"#1565c0"

});

});

});

/*=========================
 CARD HOVER EFFECT
=========================*/

document.querySelectorAll(".test-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

/*=========================
 RIPPLE BUTTON EFFECT
=========================*/

document.querySelectorAll(".mock-btn,.pdf-btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.clientX-this.getBoundingClientRect().left-radius}px`;

circle.style.top=`${e.clientY-this.getBoundingClientRect().top-radius}px`;

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

/*=========================
 SCROLL ANIMATION
=========================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.15});

document.querySelectorAll(".test-card,.paper-card,.strategy-article").forEach(el=>{

observer.observe(el);

});

/*=========================
 ACTIVE NAV LINK
=========================*/

const navLinks=document.querySelectorAll(".nav-links a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(l=>l.classList.remove("active"));

link.classList.add("active");

});

});

