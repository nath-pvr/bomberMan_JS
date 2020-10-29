let map_bg = document.querySelector('#mapBg');
console.log(map_bg);
let player = document.querySelector('#player');
console.log(player);

let xPosition;
let yPosition;

let arrMove = ["up","down","left","right"];

/* debut gestion des deplacements et action du joueur */
// declaration of 4 deplacement functions
function getPosition(element, property){
    return parseInt(window.getComputedStyle(element).getPropertyValue(property));
}

function move(element, direction){

    let left = getPosition(element,"left");
    let up = getPosition(element, "top");
    let vLimit = getLimit("V");
    let hLimit = getLimit("H");

    switch (direction) {
        
        case "up":
            
            if (up > vLimit.start){
                up -=  25;
            element.style.top = up + "px";
        
            }
            break;

        case "down":
            
            if (up < vLimit.end){
                up +=  25;
        console.log(up);
            element.style.top = up + "px";
        console.log(element.style.top);
            }
            break;

        case "left":
            
            if (left > hLimit.start){
        console.log(hLimit.start);
                left -=  25;
        console.log(left);
            element.style.left = left + "px";
        console.log(element.style.left);
            }
            break;
        
        case "right":
            
            if (left < hLimit.end){
        console.log(hLimit.end);
                left +=  25;
            element.style.left = left + "px";
        console.log(element.style.left);
            }
            break;
    
        
    }

}



// programation of arrow directed

window.addEventListener("keydown", function (event) {
    let keycode = event.key;

    switch (keycode) {

        case "ArrowUp":
        case "z":
            
           move(player,"up");

        break;

        case "ArrowDown":
        case "s":
            
            move(player,"down");
            
        break;

        case "ArrowLeft":
        case "q":
            move(player,"left");
        break;

        case "ArrowRight":
        case "d":
            move(player,"right");
        break;

        case " ":
            createBomber();
        break;
    }
});


function getLimit(sType) {
    let limit = {
        start: null,
        end: null,
    };

    if (map_bg != null) {

        if (sType != undefined && sType == "V") {
            limit.start = 0;
            limit.end = 605 - player.offsetHeight;
        } else {
            limit.start = 0;
            limit.end = 605 - player.offsetWidth;
        }
    }
    return limit;
}

/* fin gestion deplacement et action du joueur */


/* début génération des bombes et ennemis */

function createBomber(){

   let bombe = document.createElement("div");
   bombe.classList = "bombe";
   bombe.style.up = yPosition;
   bombe.style.left = xPosition;
   map_bg.append(bombe);

   setTimeout(() => {
       bombe.remove();
   }, 2300);
}


function createEnnemy(){
    let ennemyNbr = 4;
    for ( let i = 0; i < ennemyNbr; i++){
        let ennemy = document.createElement("div");
        ennemy.classList = "ennemis";
        map_bg.append(ennemy);
    }

    let randPosition = document.getElementsByClassName('ennemis');
    for ( let i= 0; i < randPosition.length; i++){
        randPosition[i].style.left = Math.floor(Math.random()*25)*2.5 + 'rem';
        randPosition[i].style.up = Math.floor(Math.random()*25)*2.5 + 'rem';
        randPosition[i].style.windth = 2.5 + "rem";
        randPosition[i].style.height = 2.5 + "rem";
    
    }
}

createEnnemy();
/* fin génération des bombes et ennemis */