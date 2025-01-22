function trafficLight(lightClr) {
    const lights = document.querySelectorAll(".container>button");
    const currentEl = event.target;
    for (const light of lights) {
        light.classList.add("notSelected");
        console.log(light);
    }
    currentEl.classList.remove("notSelected");
    switch (lightClr) {
        case "red":
            stopCar();
            break;
        case "yellow":
            startCar();
            if (i < 60) {
                setTimeout(() => {
                    interval = setInterval(moveCar, 0);
                    document.getElementById("yellow").classList.add("notSelected");
                    document.getElementById("green").classList.remove("notSelected");
                }, 2000);
            }
            break;
        case "green":
            if (i < 60) {
                interval = setInterval(moveCar, 10);
            } else {
                i = 0;
                interval = setInterval(moveCar, 10);
            }
            break;
    }
}
let i = 0;
let interval;
const carImg = document.getElementById("img");
function stopCar() {
    carImg.classList.remove("imgStart");
    console.log("Stop");
    clearInterval(interval);
}

function moveCar() {
    carImg.classList.remove("imgStart");
    i += 0.5;
    if (i === 60) {
        document.getElementById("red").classList.remove("notSelected");
        document.getElementById("green").classList.add("notSelected");
        stopCar();
    }
    carImg.style.left = `${i}vw`
    console.log("move car.");
}

function startCar() {
    console.log("Start car.");
    carImg.classList.add("imgStart");
}