var depth = 6
var curl = Math.PI / 3
var breadth = 4
var spread = Math.PI / 3

function branch(d) {
    line(0, 0, 0, 1)

    if (d > 1) {
        translate(0, 1)
        rotate(curl)
        scale(0.5)
        
        for (var i = 0; i < breadth; i++) {
            branch(d - 1)
            rotate(spread)
        }

        rotate(-spread * breadth)
        rotate(-curl)
        scale(2)
        translate(0, -1)
    }
}


function setup() {
    createCanvas(1340, 630)
}

function draw() {
    curl = Math.PI * ((mouseX / width) * 2 - 1)
    spread = Math.PI * ((mouseY / height) * 2 - 1)

    background('#142F44')
    stroke(255)
    strokeWeight(0.1)

    let positions = [
        { x: width / 4, y: height },
        { x: width / 2, y: height },
        { x: (3 * width) / 4, y: height }
    ];

    for (let pos of positions) {
        push();
        translate(pos.x, pos.y);
        rotate(Math.PI);
        scale(200);
        branch(depth);
        pop();
    }
}

