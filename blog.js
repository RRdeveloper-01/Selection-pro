/* ==========================
   Reading Progress Bar
========================== */

const progressBar = document.createElement("div");

progressBar.id = "reading-progress";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* ==========================
      Copy Link
========================== */

const copyBtn = document.querySelector(".fa-link");

if(copyBtn){

copyBtn.parentElement.addEventListener("click",(e)=>{

e.preventDefault();

navigator.clipboard.writeText(window.location.href);

alert("🔗 Link Copied Successfully");

});

}


/* ==========================
      WhatsApp Share
========================== */

const whatsapp=document.querySelector(".fa-whatsapp");

if(whatsapp){

whatsapp.parentElement.addEventListener("click",(e)=>{

e.preventDefault();

const url=encodeURIComponent(window.location.href);

const title=encodeURIComponent(document.title);

window.open(

`https://wa.me/?text=${title}%0A${url}`,

"_blank"

);

});

}


/* ==========================
      Facebook Share
========================== */

const fb=document.querySelector(".fa-facebook-f");

if(fb){

fb.parentElement.addEventListener("click",(e)=>{

e.preventDefault();

window.open(

"https://www.facebook.com/sharer/sharer.php?u="+
encodeURIComponent(window.location.href),

"_blank"

);

});

}


/* ==========================
      X Share
========================== */

const x=document.querySelector(".fa-x-twitter");

if(x){

x.parentElement.addEventListener("click",(e)=>{

e.preventDefault();

window.open(

"https://twitter.com/intent/tweet?url="+
encodeURIComponent(window.location.href)+
"&text="+
encodeURIComponent(document.title),

"_blank"

);

});

}