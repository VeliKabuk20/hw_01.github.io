let firstLink = document.querySelector(".first-link");
let secondLink = document.querySelector(".second-link");
let second = document.querySelector(".second")
let i = document.querySelectorAll(".ortak");
firstLink.addEventListener("mouseover",function()
{
    i[0].style.opacity = "1";
})
firstLink.addEventListener("mouseleave",function(){
    i[0].style.opacity = "0";
})
secondLink.addEventListener("mouseover",function()
{
    i[1].style.opacity = "1"
})
secondLink.addEventListener("mouseleave",function(){
    i[1].style.opacity = "0";
})
let aku = document.querySelectorAll(".aku");
for(let x of aku)
{
    x.addEventListener("click",function()
{
    window.location.assign("deneme.htm");
});
}
let windowHeight = window.innerHeight;
console.log(windowHeight);
let circle = document.querySelectorAll(".main-circle");
const run = () => {
   let circleTop = Math.round(circle[0].getBoundingClientRect().top);
    if(circleTop < 750 && circleTop > 0)
    {
        circle.forEach(box => {
            if(box.classList.contains("show") == false){
                box.classList.add("show");
            }
        })
    }
    else{
        circle.forEach(box => {
            if(box.classList.contains("show"))
            box.classList.remove("show");
        })
    }
}

window.addEventListener("scroll",run);

let section = document.querySelector(".section-navbar");
const run2 = () => {
    const deger = Math.round(section.getBoundingClientRect().top);
    if(deger < 610){
        section.classList.add("show2");
    }
    else{
        section.classList.remove("show2");
    }
}
window.addEventListener("scroll",run2);
let btn = document.querySelector(".card-btn");
btn.addEventListener("click",function()
{
    window.scrollTo(0,2013);
});
let sign_in = document.querySelector(".sign-in");
sign_in.addEventListener("click",function()
{
    const gec = () => {
        console.log(window.location.assign("../sign-in/sign-in.htm"));
    }
    setTimeout(gec,800);
    let gecis1 = document.querySelector(".gecis");
    let gecis2 = document.querySelector(".gecis2");
    gecis1.style["z-index"] = "6";
    gecis1.style.animation = "left .8s";
    gecis2.style["z-index"] = "6";
    gecis2.style.animation = "right .8s";
})