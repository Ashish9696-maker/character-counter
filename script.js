let inp = document.querySelector("input");
let span = document.querySelector("span");
let h1 = document.querySelector("h1");
inp.addEventListener("input" , function(){
    let left = 20 - inp.value.length;
    span.textContent = left;
    if(left < 0)
    {
        span.style.color="red";
        h1.style.color = "red";
        h1.textContent="More than 20"
    }
    else{
        span.style.color="black";
        h1.style.color = "black";
        h1.textContent="Character Counter"
    }
})