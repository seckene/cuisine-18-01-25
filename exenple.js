const liste = document.querySelector(".liste")
window.addEventListener('scroll',() =>{
console.log(window.scrollY);

if (window.scrollY>640){
   
     liste.style.visibility="hidden"
    
  }

 
  else{

    window.scrollY>620;
    liste.style.visibility="visible"

    liste.style.top ="0px";

  
  }
});





const maouse = document.querySelector(".maousmove");
window.addEventListener("mousemove",(e) =>{
    maouse.style.left = e.pageX + "px";
    maouse.style.top =e.pageY + "px";
} );


window.addEventListener("mousedown", () => {
    maouse.style.transform ="scale(2) translate(-25%,-25%)";

   }) ;


   window.addEventListener("mouseup", () => {
    maouse.style.transform ="scale(1) translate(-50%,-50%)";
   }) ;


 function changeslide() {
  document.getElementById("slide").src="images.jpg";
 };
const svg =document.querySelector("svg")
 const inp=document.querySelector(".osc");
 console.log(inp);
 svg.addEventListener("click",() =>{
  inp.style.visibility="visible";
  lele.style.visibility="visible";
  leger.style.visibility="visible";
  });     
const leger =document.querySelector(".leger");
console.log(leger)

  const lele =document.querySelector(".lele");
  console.log(lele)

  lele.addEventListener("click",() =>{
    inp.style.visibility="hidden";
    lele.style.visibility="hidden";
    leger.style.visibility="hidden";

  });
  
  const fait =document.querySelector(".fait");
  console.log(fait);
  const titre15 =document.querySelector("p15");
  console.log(titre15);


const giga= document.querySelector(".giga");
console.log(giga)




  titre15.addEventListener("click",() =>{
    fait.style.visibility="visible"
    titre15.style.top = "40"+"px"
    giga.style.top= "300px"
  })