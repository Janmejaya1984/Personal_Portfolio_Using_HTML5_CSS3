const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progressBarWrapper = document.querySelector(".progress-bar-wrapper");
const progressBarPercens = [97,67,85,77,54,99,67];
const navbarOffsetTop = navbar.offsetTop;
const progressPercentDivs = document.querySelectorAll(".progress-percent");
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>=navbarOffsetTop){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }

    sections.forEach((section,i)=>{
      if(window.pageYOffset >= section.offsetTop){
        navbarLinks.forEach((link)=>{
          link.classList.remove("change");
        });
        navbarLinks[i].classList.add("change");
      }
    });
   
    if(window.pageYOffset >= progressBarWrapper.offsetTop-200){
        progressPercentDivs.forEach((element,i)=>{
           element.style.width = `${progressBarPercens[i]}%`;
        });
    }

});
