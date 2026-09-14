//Dankes Nachricht erstellen

const form = document.querySelector(".kontaktForm");

const dankesNachricht = "Danke für Ihre Nachricht! :D";

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const nameInfo = document.querySelector(".name input");
    const EmailInfo = document.querySelector(".Email input");
    const messageInfo = document.querySelector(".message input");
    const ratingInfo = document.querySelector(".rating input");

    console.log("Dein Name: " + nameInfo.value);
    console.log("Email-Adresse: " + EmailInfo.value);
    console.log("Nachricht: " + messageInfo.value);
    console.log("Bewertung: " + ratingInfo.value);

    alert(dankesNachricht);

});