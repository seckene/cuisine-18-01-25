const svg =document.querySelector("svg");
const liste=document.querySelector(".liste");
const btn=document.querySelector("button")
svg.addEventListener("click",()=>{
liste.style.display="flex"
})

btn.addEventListener("click",()=>{
    liste.style.display="none"
})