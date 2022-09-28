import data from './data.json' assert{type: 'json'};
let btnDaily = document.querySelector("#daily");
let btnWeekly = document.querySelector("#weekly");
let btnMonthly = document.querySelector("#monthly");
let buttons =[btnDaily,btnWeekly,btnMonthly];
let panel = document.querySelector("#app__cards");



function mostrar(titulo, current, previus){
    panel.innerHTML += `<div class="app__${titulo.toLowerCase().split(/\s+/).join('')}">
        <div class="app__container">
          <div class="app__container__header">
            <h2>${titulo}</h2>
            <img src="/images/icon-ellipsis.svg" alt="" class="scr">
          </div>
          <div class="app__container__info">
            <p>${current}hrs</p>
            <span>Last week - ${previus}hr</span>
          </div>
        </div>
      </div>`;
}
btnDaily.addEventListener("click",()=>{
    buttons.forEach((button)=>{button.classList.remove("selected")})
    btnDaily.classList.add("selected");
    panel.innerHTML = "";
    data.forEach((item)=>{
        mostrar(item.title, item.timeframes.daily.current, item.timeframes.daily.previous);
    })
    
});
btnWeekly.addEventListener("click",()=>{
    buttons.forEach((button)=>{button.classList.remove("selected")})
    btnWeekly.classList.add("selected");
    panel.innerHTML = "";
    data.forEach((item)=>{
        mostrar(item.title, item.timeframes.weekly.current, item.timeframes.weekly.previous);
    })
    
})
btnMonthly.addEventListener("click",()=>{
    buttons.forEach((button)=>{button.classList.remove("selected")})
    btnMonthly.classList.add("selected");
    panel.innerHTML = "";
    data.forEach((item)=>{
        mostrar(item.title, item.timeframes.monthly.current, item.timeframes.monthly.previous);
    })
    
})

function initial(){
    panel.innerHTML = "";
    data.forEach((item)=>{
        mostrar(item.title, item.timeframes.daily.current, item.timeframes.daily.previous);
    })
}
initial();