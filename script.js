let timerElement = document.querySelector("#timer");
let countDown;
let paused = false;
function startCountDown() {
   let workMin = parseInt(document.querySelector("#work_minutes_required").value) || 0;
   let originWorkMin = workMin;
   let workSec = parseInt(document.querySelector("#work_seconds_required").value) || 0;
   let originWorkSec = workSec;
   let breakMin = parseInt(document.querySelector("#break_minutes_required").value) || 0;
   let originBreakMin = breakMin;
   let breakSec = parseInt(document.querySelector("#break_seconds_required").value) || 0;
   let originBreakSec = breakSec;

   countDown = setInterval(() => {
      if(workSec > 0 || workMin > 0){
         document.querySelector(".timer_type").textContent = "Work Time";
         if(!paused){
            if(workSec === 0){
               workMin--;
               workSec = 59;
            }
            else{
               workSec--;
            }
         }
         let minStr = String(workMin).padStart(2, '0');
         let secStr = String(workSec).padStart(2, '0');
         timerElement.textContent = `${minStr}:${secStr}`;
      }
      else if(workSec === 0 && workMin === 0 && (breakMin > 0 || breakSec > 0)){
         document.querySelector(".timer_type").textContent = "Break Time";
         if(!paused){
            if(breakSec === 0){
               breakMin--;
               breakSec = 59;
            }
            else{
               breakSec--;
            }
         }
         minStr = String(breakMin).padStart(2, '0');
         secStr = String(breakSec).padStart(2, '0');
         timerElement.textContent = `${minStr}:${secStr}`;
      }
      else{
         workMin = originWorkMin;
         workSec = originWorkSec;
         breakMin = originBreakMin;
         breakSec = originBreakSec;
      }
   }, 1000);
}
function pauseCountDown(){
   paused = true;
}
function resumeCountDown(){
   paused = false;
}

let startButton = document.querySelector(".start_timer");
let pauseButton = document.querySelector(".pause_timer");
let resetButton = document.querySelector(".reset_timer");
startButton.addEventListener("click", () => {
   clearInterval(countDown);
   paused = false;
   startCountDown();
});
pauseButton.addEventListener("click", () => {
   paused == true ? resumeCountDown() : pauseCountDown();
});
resetButton.addEventListener("click", () => {
   clearInterval(countDown);
   timerElement.textContent = "00:00";
});

const arrowRequiredTimeMenu = document.querySelector(".arrow_time_required_menu");
arrowRequiredTimeMenu.addEventListener("click", () => {
   document.querySelector(".container_time_required").classList.toggle("container_time_required_hidden");
   arrowRequiredTimeMenu.classList.toggle("arrow_time_required_menu_second_position");
});