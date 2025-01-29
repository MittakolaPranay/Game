let gameBtn = [];
let userBtn = [];
let btnFlash = ["red","yellow","green","purple"];

let start = false;
let level = 0;
let score = 0;

let h4 = document.querySelector("h4");


document.addEventListener("keypress",()=>{
    if(start == false){
        console.log("game stared");
        start = true;
        levelUp();
    }
});

function btnFlashing(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userBtn = [];
    level++;
    h4.innerText = `Level ${level}`;
    let randInd = Math.floor(Math.random() * 3);
    let randColor = btnFlash[randInd];
    gameBtn.push(randColor);
    console.log(gameBtn);
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlashing(randBtn);
}

function checkBtn(idx){
    if(userBtn[idx] == gameBtn[idx]){
        if(userBtn.length == gameBtn.length){
            setTimeout(levelUp,500);
        }
    }else{
    

        h4.innerHTML = `Your score is ${score}<br>Game over! press any key to start`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "white";
        },250)
        reset();
    }
}

function userSelBtn(){
    btnFlashing(this);
    userBtn.push(this.classList[1]);
    checkBtn(userBtn.length-1);
}

function reset(){
    start = false;
    level = 0;
    gameBtn = [];
    userBtn = [];

}

let btns = document.querySelectorAll(".btn");

for(btn of btns){
    btn.addEventListener("click",userSelBtn);
}



