//Dankes Nachricht erstellen

const form = document.querySelector(".kontaktForm");

const dankesNachricht = "Danke für Ihre Nachricht! :D";

form.addEventListener("submit", (event) => {

    event.preventDefault(); // Macht dass die Seite nicht neu Läd beim druck von dem Button

    const nameInfo = document.querySelector(".name input"); //Variabeln erstellen für Console
    const EmailInfo = document.querySelector(".Email input");
    const messageInfo = document.querySelector(".message input");
    const ratingInfo = document.querySelector(".rating input");

    console.log("Dein Name: " + nameInfo.value); // Nimmt alle Infos in Console auf, als Funktion
    console.log("Email-Adresse: " + EmailInfo.value);
    console.log("Nachricht: " + messageInfo.value);
    console.log("Bewertung: " + ratingInfo.value);

    alert(dankesNachricht); //Gibt das Popup Raus von der Dankes Nachricht

});