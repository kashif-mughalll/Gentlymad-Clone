window.addEventListener("resize", (e)=> {
    if(window.innerWidth < 480) document.getElementById("mob-header-btn").style.display = "flex";
    else  document.getElementById("mob-header-btn").style.display = "none";   
});


if(window.innerWidth < 480) document.getElementById("mob-header-btn").style.display = "flex";
else  document.getElementById("mob-header-btn").style.display = "none";


document.getElementById("mob-header-btn").addEventListener("click",()=>{
    document.getElementById("mobile-header").style.display = "block"; 
    document.getElementById("mob-header-btn").style.display = "none";
});


document.getElementById("cancel-btn").addEventListener("click",()=>{
    document.getElementById("mobile-header").style.display = "none";
    document.getElementById("mob-header-btn").style.display = "inline";
});





