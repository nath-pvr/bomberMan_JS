let map_bg = document.querySelector('#mapBg');
console.log(map_bg);
let player = document.querySelector('#player');
console.log(player);

let xPosition;
let yPositon;



// declaration of 4 deplacement functions

function left() {
    let hLimit = getLimit();
    /* je récupère la position de l'objet player*/
    x = getComputedStyle(player).left;
    /* je transpose x en integer */
    x = parseInt(x);

    if (x> hLimit.start){
    x = x - 25;
    /* je déclare que la valeur de x = integer + px */
    xPosition = x + "px";
    /* j'applique le style left à l'objet player */
    player.style.left = xPosition;
    }
}

function right() {
    let hLimit = getLimit();
    console.log(hLimit);
    x = getComputedStyle(player).left;
    x = parseInt(x);

    if (x < hLimit.end){
    x = x + 25;
    xPosition = x + "px";
    player.style.left = xPosition;
    }    
}

function up() {
    let vLimit = getLimit("V"); 
    y = getComputedStyle(player).top;
    y = parseInt(y);

    if (y > vLimit.start){
    y = y - 25;
    yPositon = y + "px";
    player.style.top = yPositon;
    }  
}

function down() {
    let vLimit = getLimit("V");
    y = getComputedStyle(player).top;
    y = parseInt(y);

    if (y < vLimit.end){
    y = y + 25;
    yPositon = y + "px";
    player.style.top = yPositon;
    }
}

// programation of arrow directed

window.addEventListener("keydown", function (event) {
    let keycode = event.key;

    switch (keycode) {

        case "ArrowUp":
        case "z":
            
            up();         
            break;

        case "ArrowDown":
        case "s":
            down();
            getLimit("V");
            break;

        case "ArrowLeft":
        case "q":
            left();
            break;

        case "ArrowRight":
        case "d":
            right();
            break;

        case " ":
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