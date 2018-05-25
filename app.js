const btnInfo = document.querySelector("#btn-info");
const btnHead = document.querySelector("#button-head");
const elemInfo = document.querySelector(".info");
const btnAbout = document.querySelector("#btn-about");
const elemAbout = document.querySelector(".about");
const btnSkills = document.querySelector("#btn-skills");
const elemSkills = document.querySelector(".skills");
const btnEdu = document.querySelector("#btn-edu");
const elemEdu = document.querySelector(".edu");
const btnCon = document.querySelector("#btn-con");
const elemCon = document.querySelector(".contact");
const btnNavSmall = document.querySelector("#btn-nav-small");
const navUl = document.querySelector("#ul");


navUl.addEventListener("click", function(e) {

  switch(e.target.id) {
    case "btn-info":
      elemInfo.scrollIntoView();
      navUl.classList.remove("nav-links-small");
      break;
    case "btn-about":
      elemAbout.scrollIntoView();
      navUl.classList.remove("nav-links-small");
      break;
    case "btn-skills":
      elemSkills.scrollIntoView();
      navUl.classList.remove("nav-links-small");
      break;
    case "btn-edu":
      elemEdu.scrollIntoView();
      navUl.classList.remove("nav-links-small");
      break;
    case "btn-con":
      elemCon.scrollIntoView();
      navUl.classList.remove("nav-links-small");
      break;
    case "ul":
      navUl.classList.remove("nav-links-small");
      break;
  }

});

window.onscroll = function() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      navUl.classList.add("navbar");
   } else {
      navUl.classList.remove("navbar");
   }
};

btnHead.addEventListener("click", function(){
  elemInfo.scrollIntoView();
});


$(document).ready(function(){
    $("#btn-web").click(function(){
        $("#panel-web").slideToggle(1500)
    });
     $("#btn-yt").click(function(){
        $("#panel-yt").slideToggle(1500)
     });
     $("#btn-app").click(function(){
        $("#panel-app").slideToggle(1500)
     });  
});

btnNavSmall.addEventListener("click", function(e){
  document.getElementById("ul").classList.add("nav-links-small");
});
