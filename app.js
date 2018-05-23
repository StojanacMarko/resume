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
const nav = document.querySelector("#ul");


nav.addEventListener("click", function(e) {

  switch(e.target.id) {
    case "btn-info":
      elemInfo.scrollIntoView();
      document.getElementById("ul").classList.remove("nav-links-small");
      break;
    case "btn-about":
      elemAbout.scrollIntoView();
      document.getElementById("ul").classList.remove("nav-links-small");
      break;
    case "btn-skills":
      elemSkills.scrollIntoView();
      document.getElementById("ul").classList.remove("nav-links-small");
      break;
    case "btn-edu":
      elemEdu.scrollIntoView();
      document.getElementById("ul").classList.remove("nav-links-small");
      break;
    case "btn-con":
      elemCon.scrollIntoView();
      document.getElementById("ul").classList.remove("nav-links-small");
      break;
    case "ul":
      document.getElementById("ul").classList.remove("nav-links-small");
      break;
  }

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