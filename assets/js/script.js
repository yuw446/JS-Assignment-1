let buttonYes = document.getElementById("button_yes");
let buttonNo = document.getElementById("button_no");

let ending = 'Problem Solved! cHeErS!'
let text_display = document.getElementById('text_display');
let stage = 0;

buttonYes.addEventListener("click", ()=>{
    stage += 1;
    switch(stage){
        case 1:
            text_display.innerHTML = "Is it because of something in the past?";
            break;
        case 2:
            text_display.innerHTML = "Can you amend it?";
            break;
        case 3:
            text_display.innerHTML = "Go fix it, done!";
        default:
            text_display.innerHTML = ending;
            console.log(stage);
            break;
    }
});

buttonNo.addEventListener("click", ()=>{
    switch(stage){
        case 1:
            text_display.innerHTML = "Everything comes to pass, let it flow.";
            break;
        case 2:
            text_display.innerHTML = "No use crying over spilled milk, sober up!";
            break;
        default:
            text_display.innerHTML = ending;
            break;
    }
});