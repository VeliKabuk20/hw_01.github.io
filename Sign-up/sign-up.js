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
let blue = document.querySelectorAll(".txtBtn");
for(let x of blue)
{
    x.addEventListener("mouseover",function()
    {
        if(x.classList.contains("blue") == false)
        {
            x.classList.add("blue")
        }
        else{
            x.classList.remove("blue")
        }
    })
    x.addEventListener("mouseleave",function()
    {
        if(x.classList.contains("blue") == true)
        {
            x.classList.remove("blue")
        }
        
    })
}
let sign = document.querySelector(".form-sign");
sign.addEventListener("click",function()
{
    sign.setAttribute("href","../sign-in/sign-in.htm");
});