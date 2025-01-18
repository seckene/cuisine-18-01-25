
const liste=document.querySelector(".liste");
window.addEventListener("scroll",()=>{
    console.log(window.scrollY);
    if (window.scrollY>100) {
        liste.style.visibility="hidden";
        

    }

    else{   
        
        window.scrollY<160;
        liste.style.visibility="visible";
         liste.style.top="0px";
         
    }
});

