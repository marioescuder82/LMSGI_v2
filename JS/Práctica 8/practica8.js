let img_actual = 1

let img = document.getElementById("imagen_1")

function cambia() {
    let img = document.getElementById("imagen_1");
    if (img_actual == 1) {
        img.src = "img2.jpg";
        img_actual = 2;
    }
    else {
        img.src = "img1.jpg";
        img_actual = 1;
    }
}

img.addEventListener("mouseover", cambia);