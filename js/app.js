const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const reçois = document.getElementById("reçois");
const envoie = document.getElementById("envoie");

one.addEventListener("click", () => {
    (envoie).removeChild(one);
    (reçois).appendChild(one);
});

two.addEventListener("click", () => {
    (envoie).removeChild(two);
    (reçois).appendChild(two);
});

three.addEventListener("click", () => {
    (envoie).removeChild(three);
    (reçois).appendChild(three);
});