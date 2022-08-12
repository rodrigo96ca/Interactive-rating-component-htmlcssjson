
const mainContainer=document.querySelector(".main-container");


const buttonSubmit=document.querySelector(".button-submit");
const boxContainer=document.getElementById("boxContainer");
const boxContainer2=document.getElementById("boxContainer2");
const circle=document.querySelectorAll(".circle");
let score = 3 //default
const scoreNumber=document.querySelector(".score-number");

mainContainer.addEventListener("click",(e) => {
    if(e.target.classList.contains("button-submit")) {
        boxContainer.classList.add("hide");
        boxContainer2.classList.remove("hide");
        scoreNumber.innerHTML=score
        
          
               
    }});



circle.forEach(btn => {
    btn.addEventListener("click",handleRatingBtnClick);
}
);


function handleRatingBtnClick(event){
    
    circle.forEach(btn =>{
        btn.classList.remove("activar");

    }) ;

    event.target.classList.add("activar");

    score = event.target.textContent;
    console.log(score);


};



