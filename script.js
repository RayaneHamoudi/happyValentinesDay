// Array of cute messages for the "No" button
const cuteNoMessages = [
    "PLEASE BABE",
    "im gonna tweak",
    "noooooo",
    "boooooo",
    "JUST ONE MORE CHANCE ILL CHANGE",
    "So it's not gonna be easy. It's going to be really hard; we're gonna have to work at this everyday, but I want to do that because I want you. I want all of you, forever, everyday. You and me... everyday.",
    "I'm gonna ask you one more time. Will you or will you not go out with me? I think my hand's slipping.",
    "ok wtv your loss",
    "youre cringe"
 ];
 
 // Event listeners for "Yes" and "No" buttons
 document.getElementById("yesBtn").addEventListener("click", onYesClick);
 document.getElementById("noBtn").addEventListener("click", onNoClick);
 
 // Function for "Yes" button click
 function onYesClick() {
     let thankYouMessage = document.getElementById("thankYouMessage");
     let yesButton = document.getElementById("yesBtn");
 
     // Customize the "Yes" button processing here
     // For example, you can display a different message or perform additional actions
     thankYouMessage.innerText = "okay ig if u want";
     thankYouMessage.style.backgroundColor = "#4caf50"; // Green background color
     yesButton.classList.add("clicked");
 
     // Remove the "clicked" class after the animation duration
     setTimeout(() => {
         yesButton.classList.remove("clicked");
     }, 500);
 }
 
 // Function for "No" button click
 function onNoClick() {
     let thankYouMessage = document.getElementById("thankYouMessage");
     let noButton = document.getElementById("noBtn");
 
     // If "No" button is clicked again, display a different cute message
     if (noButton.classList.contains("clicked")) {
         let randomIndex = Math.floor(Math.random() * cuteNoMessages.length);
         thankYouMessage.innerText = cuteNoMessages[randomIndex];
     } 
 
     thankYouMessage.style.backgroundColor = "#f44336"; // Red background color
     noButton.classList.add("clicked");
 
     // Remove the "clicked" class after the animation duration
     setTimeout(() => {
         noButton.classList.remove("clicked");
     }, 500);
 }