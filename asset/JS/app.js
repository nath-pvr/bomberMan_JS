let map_bg = document.querySelector('#mapBg');

let player = document.querySelector('#player');

let playerMove = false;


let ennemyNbr = 4;
const arrEnnemy = [];
let arrMove = ["up", "down", "left", "right"];

createEnnemy();

/* debut gestion des deplacements et actions */

// fonction pour le déplacement aléatoire des ennemis 



// declaration of 4 deplacement functions
function getPosition(element, property) {
    return parseInt(window.getComputedStyle(element).getPropertyValue(property));
}


function move(element, direction) {

    let left = getPosition(element, "left");
    let up = getPosition(element, "top");
    let vLimit = getLimit("V");
    let hLimit = getLimit("H");

    switch (direction) {

        case "up":

            if (up > vLimit.start) {
                up -= 25;
                element.style.top = up + "px";

            }
            break;

        case "down":

            if (up < vLimit.end) {
                up += 25;
                element.style.top = up + "px";
            }
            break;

        case "left":

            if (left > hLimit.start) {
                left -= 25;
                element.style.left = left + "px";
            }
            break;

        case "right":

            if (left < hLimit.end) {
                left += 25;
                element.style.left = left + "px";
            }
            break;


    }

}



// programation of arrow directed

window.addEventListener("keydown", function (event) {
    let keycode = event.key;
    playerMove = true;
    switch (keycode) {

        case "ArrowUp":
        case "z":

            move(player, "up");

            break;

        case "ArrowDown":
        case "s":

            move(player, "down");

            break;

        case "ArrowLeft":
        case "q":
            move(player, "left");
            break;

        case "ArrowRight":
        case "d":
            move(player, "right");
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
            limit.start = 25;
            limit.end = 625 - player.offsetHeight;
        } else {
            limit.start = 25;
            limit.end = 625 - player.offsetWidth;
        }
    }
    return limit;
}

setInterval(function () {
    if (playerMove) {
        arrEnnemy.forEach(ennemis => {
            let random = Math.floor(Math.random() * 4);
            move(ennemis, arrMove[random]);
        });
    }
}, 1000);

/* fin gestion deplacement et action */


/* début génération des bombes et ennemis */



function createBomber() {

    let bombe = document.createElement("div");
    bombe.classList = "bombe";
    bombe.style.top = getPosition(player, "top") + "px";
    bombe.style.left = getPosition(player, "left") + "px";
    map_bg.append(bombe);
    
       setTimeout(() => {
        bombe.remove();
    }, 2500);

    function explosion(){

        let explosion = document.createElement("div");
        explosion.classList= "explosion";
        explosion.style.top = getPosition(bombe,"top") + "px";
        explosion.style.left = getPosition(bombe,"left") + "px";
        map_bg.append(explosion);
        setTimeout(() => {
            explosion.remove();
        }, 2000);
    };

    setTimeout(() => {
        explosion();
    }, 2400);

}




function createEnnemy() {


    for (let i = 0; i < ennemyNbr; i++) {
        arrEnnemy[i] = document.createElement("div");
        arrEnnemy[i].classList = "ennemis";
        map_bg.append(arrEnnemy[i]);
    }

    let randPosition = document.getElementsByClassName('ennemis');
    for (let i = 0; i < randPosition.length; i++) {
        arrEnnemy[i].style.left = Math.floor(Math.random() * 25) * 2.5 + 'rem';
        arrEnnemy[i].style.top = Math.floor(Math.random() * 25) * 2.5 + 'rem';
        arrEnnemy[i].style.windth = 2.5 + "rem";
        arrEnnemy[i].style.height = 2.5 + "rem";

    }
}



/* fin génération des bombes et ennemis */