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
let btn = document.querySelector(".recover-btn");
let input = document.getElementsByClassName("recover-input")[0];
let span = document.querySelector(".recover-span");
const show = () =>{
    let deger = input.value;
    let counter = 0;
    if(deger === "")
    {
        span.style.scale = "1";
        span.style.color = "#dc3545";
        span.innerHTML = "Please Enter your email adress!!!!";
    }
    else{
        for(let x of deger){
            if(x === "@"){
                counter++;
            }
        }
        if(counter === 1){
            span.style.scale = "1";
            span.style.color = "#28a745";
            span.innerHTML = "Email is sent";
            counter = 0;
        }
        else{
            span.style.scale = "1";
            span.style.color = "#dc3545";
            span.innerHTML = "Please enter valid email address";
        }
    }
    
}
btn.addEventListener("click",show);
