document.addEventListener('DOMContentLoaded', () => {
    const menuBars = document.querySelector('.fa-bars');
    const menuTimes = document.querySelector('.fa-times');
    const navTab = document.querySelector('.nav-tab');

    menuBars.addEventListener('click', () => {
        navTab.classList.toggle('active');
        menuBars.classList.toggle('active');
        menuTimes.classList.toggle('active');
    });

    menuTimes.addEventListener('click', () => {
        navTab.classList.toggle('active');
        menuBars.classList.toggle('active');
        menuTimes.classList.toggle('active');
    });

    // Intersection Observer for animations
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});


/***************Gallery*********************/ 

const imgcontainer=document.querySelector('.image-container')
const prevButton =document.getElementById("prev")
const nextButton =document.getElementById("next")

let x = 0;
let timer;
prevButton.addEventListener("click",()=>{
    x= x+45;
    updateGallery();
});
nextButton.addEventListener("click",()=>{
    x= x-45;
    clearTimeout(timer)
    updateGallery();
});

function updateGallery(){
    imgcontainer.style.transform=`perspective(1000px) rotateY(${x}deg)`
    timer=setTimeout(()=>{
        x=x-45
        updateGallery()
    },3000)
}

updateGallery()