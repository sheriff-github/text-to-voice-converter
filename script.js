button =document.querySelector("button");

text= document.querySelector("textarea");
button.addEventListener("click", () => {
    let utterances =new SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(utterances);
});