'use strict';

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById('score--1');
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");


let scores;
let currentScore;
let activePlayer ;
let playing ;

const init = function(){

    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add("hidden");
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");   
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");  
};

init();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");      

}

btnRoll.addEventListener("click",function(){

    //Step 1 : Random
    if(playing){
        const dice = Math.trunc(Math.random()*6)+1;

        diceEl.classList.remove("hidden");
    
    
        //Step 2 : Populate in dice section
        diceEl.src = `dice-${dice}.png`
    
    
        //Step 3 : toggle if dice 1;
    
        if(dice!==1){
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
           
        }else{
            switchPlayer();
    
        }
    }

});

btnHold.addEventListener("click",function(){

    if(playing){
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
    }


    if(scores[activePlayer] >=10){
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.current--${activePlayer}`).classList.remove("player--active");
    }else{
        switchPlayer();       
    }

})

btnNew.addEventListener("click",init());


// let player1 = 0;
// let player2 = 0;

// function random(){
//     return Math.trunc(Math.random()*6)+1; 
// }

// let check;

// document.querySelector(".btn--new").addEventListener("click",function(){
//     document.getElementById("current--0").textContent = 0; 
//     document.getElementById("current--1").textContent = 0; 

//     document.getElementById("score--0").textContent = 0;
//     document.getElementById("score--1").textContent = 0;

//     document.querySelector(".player--0").classList.remove("player--winner");
//     document.querySelector(".player--1").classList.remove("player--winner");

//     player1 = 0;
//     player2 = 0;
// })
 
// document.querySelector(".btn--roll").addEventListener("click",function(){

//     document.querySelector(".dice").classList.remove("hidden");
//     let random_no = random();
    
//     document.querySelector(".dice").src = `dice-${random_no}.png`;

//     if(random_no === 1 && document.querySelector(".player--0").classList.contains("player--active")){
//         document.querySelector(".player--0").classList.remove("player--active");
//         document.querySelector(".player--1").classList.add("player--active"); 
       
//         document.getElementById("current--0").textContent = 0;
//     }else if(random_no === 1 && document.querySelector(".player--1").classList.contains("player--active")){
//         document.querySelector(".player--1").classList.remove("player--active");
//         document.querySelector(".player--0").classList.add("player--active");  
       
//         document.getElementById("current--1").textContent = 0;
//     }else if(random_no !== 1 &&document.querySelector(".player--0").classList.contains("player--active")){
//        let current_0 = Number(document.getElementById("current--0").textContent)
//        console.log(current_0);
       
//        let curr_0 = current_0+random_no; 

//        console.log(curr_0);
       

//        player1 = player1 + curr_0;
//        document.getElementById("current--0").textContent = curr_0;
//        document.getElementById("score--0").textContent = player1; 
       
//     }else if(random_no !== 1 && document.querySelector(".player--1").classList.contains("player--active")){
//         let current_1 = Number(document.getElementById("current--1").textContent);
//         console.log(current_1);

//         let curr_1 = current_1+random_no;  


//         console.log(curr_1);
//         player2 = player2 + curr_1;    
    
//        document.getElementById("current--1").textContent = curr_1;
//        document.getElementById("score--1").textContent = player2;         
//     }

//     if((Number(document.getElementById("score--0").textContent ))>= 100 || (Number(document.getElementById("score--1").textContent )>= 100)){
//         if((Number(document.getElementById("score--0").textContent)) > (Number(document.getElementById("score--1").textContent))){
//             document.querySelector(".player--0").classList.add("player--winner");
//         }else{
//             document.querySelector(".player--1").classList.add("player--winner");
//         }
//     }

// })
// // let random_value = random();
// document.querySelector(".btn--hold").addEventListener("click",function(){

//     if(document.querySelector(".player--0").classList.contains("player--active")){
//         document.querySelector(".player--0").classList.remove("player--active");
//         document.querySelector(".player--1").classList.add("player--active"); 
        
//         document.getElementById("current--0").textContent = 0;      
//      }else{
//         document.querySelector(".player--1").classList.remove("player--active");
//         document.querySelector(".player--0").classList.add("player--active");  
        
//         document.getElementById("current--1").textContent = 0;               
//      }

// })







