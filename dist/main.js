(()=>{document.addEventListener("DOMContentLoaded",()=>{console.log("Script loaded!"),document.querySelector("#hamburger").addEventListener("click",s)});var s=()=>{let e=document.querySelector("nav");e&&(e.classList.contains("hidden")?(setTimeout(()=>{e.classList.remove("slide-in")},300),e.classList.add("slide-in"),e.classList.toggle("hidden")):(setTimeout(()=>{e.classList.toggle("hidden"),e.classList.remove("slide-out")},300),e.classList.add("slide-out")))};})();