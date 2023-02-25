const Likeboton = document.querySelector("Like-boton");
let Likeicon = document.querySelector("#icon");
let count = document.querySelector("#count");

let clicked = false;

likeboton.addEventListener("click", () =>{
    if (!clicked) {
        clicked = true;
        Likeicon.innerHTML = '<i class="fas fa-thumbs-up"></i>';
        count.textContent++;
    } else {
        clicked = false;
        Likeicon.innerHTML = '<i class="far fa-thumbs-up"></i>';
        count.textContent--;
    }
});