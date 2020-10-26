let map_bg = document.querySelector('#mapBg');
console.log(map_bg);
let player = document.querySelector('#player');
console.log(player);

let x;
let y;

// declaration of 4 deplacement functions

function left() {
    /* je récupère la position de l'objet player*/
    x = getComputedStyle(player).left;
    /* je transpose x en integer */
    x = parseInt(x);
    x = x - 25;
    /* je déclare que la valeur de x = integer + px */
    x = x + "px";
    /* j'applique le style left à l'objet player */
    player.style.left = x;
    console.log(x)
}

function right() {
    x = getComputedStyle(player).left;
    x = parseInt(x);
    x = x + 25;
    x = x + "px";
    player.style.left = x;
    console.log(x)
}

function up() {
    y = getComputedStyle(player).top;
    y = parseInt(y);
    y = y - 25;
    y = y + "px";
    player.style.top = y;
    console.log(y)
}

function down() {
    y = getComputedStyle(player).top;
    y = parseInt(y);
    y = y + 25;
    y = y + "px";
    player.style.top = y;
    console.log(x)
}

// programation of arrow directed

window.addEventListener("keydown", function (event) {
    let keycode = event.key;

    switch (keycode){

        case "ArrowUp":
        case "z":
            up();
        break;

        case "ArrowDown":
        case "s":
            down();
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