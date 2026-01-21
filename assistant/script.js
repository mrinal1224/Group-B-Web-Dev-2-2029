// Speech Recognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;

// Elements
const startBtn = document.getElementById("startBtn");
const statusEL = document.getElementById("status");
const userText = document.getElementById("userText");
const assistantText = document.getElementById("assistantText");

// Text-to-Speech
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}

// Command Processor
function handleCommand(command) {
  let response = "";

  if (command.includes("hello") || command.includes("hi")) {
    response = "Hello! How can I help you?";
  } 
  else if (command.includes("time")) {
    const time = new Date().toLocaleTimeString();
    response = `The time is ${time}`;
  } 
  else if (command.includes("date")) {
    const date = new Date().toDateString();
    response = `Today's date is ${date}`;
  } 
  else if (command.includes("open youtube")) {
    response = "Opening YouTube";
    window.open("https://youtube.com", "_blank");
  } 
  else if (command.includes("open google")) {
    response = "Opening Google";
    window.open("https://google.com", "_blank");
  } 
  else if (command.includes("open whatsapp")) {
    response = "Opening WhatsApp Web";
    window.open("https://web.whatsapp.com", "_blank");
  } 
  else if (command.includes("who are you")) {
    response = "I am your virtual assistant built using JavaScript.";
  } 
  else {
    response = "Sorry, I don't understand that command.";
  }

  assistantText.innerText = response;
  speak(response);
}

// Start Listening
startBtn.addEventListener("click", () => {
  statusEL.innerText = "Listening...";
  recognition.start();
});

// When Voice is Captured
recognition.onresult = (event) => {
  const command = event.results[0][0].transcript.toLowerCase();
  userText.innerText = command;
  statusEL.innerText = "Processing...";
  handleCommand(command);
};

// Error Handling
recognition.onerror = () => {
  statusEL.innerText = "Error occurred. Try again.";
};
