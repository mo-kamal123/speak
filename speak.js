let btn = document.querySelector("button");
let text = document.querySelector("textarea");
btn.addEventListener('click', () => {
    let talk = new SpeechSynthesisUtterance(text.value)
    speechSynthesis.speak(talk);
})