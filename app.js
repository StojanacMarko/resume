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

btnInfo.addEventListener("click", function(){
  elemInfo.scrollIntoView();
  document.getElementById("ul").classList.remove("nav-links-small");
});

btnHead.addEventListener("click", function(){
  elemInfo.scrollIntoView();
});

btnAbout.addEventListener("click", function(){
  elemAbout.scrollIntoView();
  document.getElementById("ul").classList.remove("nav-links-small");
})

btnSkills.addEventListener("click", function(){
  elemSkills.scrollIntoView();
  document.getElementById("ul").classList.remove("nav-links-small");
})

btnEdu.addEventListener("click", function(){
  elemEdu.scrollIntoView();
  document.getElementById("ul").classList.remove("nav-links-small");
});

btnCon.addEventListener("click", function(){
  elemCon.scrollIntoView();
  document.getElementById("ul").classList.remove("nav-links-small");
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

btnNavSmall.addEventListener("click", function(){
  document.getElementById("ul").classList.add("nav-links-small");
});