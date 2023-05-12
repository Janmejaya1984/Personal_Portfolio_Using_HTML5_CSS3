const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progressBarWrapper = document.querySelector(".progress-bar-wrapper");
const progressPercentages = [97,67,85,77,54,99,67];
const progressPercentageDivs = document.querySelectorAll(".progress-percent");
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>=navbarOffsetTop){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
    sections.forEach((section,i)=>{
       if(window.pageYOffset >= section.offsetTop){
        navbarLinks.forEach((navbarLink)=>{
            navbarLink.classList.remove('change');
        });
        navbarLinks[i].classList.add('change');
       }
    });
    if(window.pageYOffset+window.innerHeight >=progressBarWrapper.offsetTop){
         progressPercentageDivs.forEach((element,i)=>{
               element.style.width= `${progressPercentages[i]}%`;
         });
    }
});
