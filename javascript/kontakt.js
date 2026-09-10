//Dankes Nachricht erstellen

const buttonReaction = document.querySelector(".button");
const info = document.getElementsByClassName("kontaktForm");
const dankesNachricht = "Danke für Ihre Nachricht!"

buttonReaction?.addEventListener("click", () => {
alert(dankesNachricht);
console.log(info);
event.preventDefault();
});

