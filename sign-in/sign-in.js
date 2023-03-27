window.addEventListener("load",function()
{
    let gecis1 = document.querySelector(".gecis1");
    let gecis2 = document.querySelector(".gecis2");
    gecis2.style.animation = "right 1.5s";
    gecis1.style.animation = "left 1.5s";
    setTimeout(function(){
        gecis1.style["z-index"] = "-5";
        gecis2.style["z-index"] = "-5";
    },1500);
});
let first = document.querySelectorAll(".first");
for(let x of first)
{
    x.addEventListener("mouseover",function()
    {
        if(x.classList.contains("red") == false){
            x.classList.add("red");
        }
        else{
            x.classList.remove("red");
        }
    })
    x.addEventListener("mouseleave",function()
    {
        if(x.classList.contains("red") == true){
            x.classList.remove("red");
        }
    })
}
let link = document.querySelector(".form-sign");
link.addEventListener("click",function()
{
    link.setAttribute("href","../Sign-up/sign-up.htm");
})