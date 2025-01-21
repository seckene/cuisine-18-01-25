
const liste=document.querySelector(".liste");
window.addEventListener("scroll",()=>{
    console.log(window.scrollY);
    if (window.scrollY>20) {
        liste.style.visibility="hidden";
        liste.style.background="black"

    }

    else{   
        
        window.scrollY<160
        liste.style.visibility="visible";
         liste.style.top="1px";
         
    }
});

