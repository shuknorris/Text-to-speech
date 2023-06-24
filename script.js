const textInput = document.getElementById('text-input');
const voiceSelect = document.getElementById('voice-select');
const listenButton = document.getElementById('listen-button');

let speech;

function populateVoices() {
  const voices = window.speechSynthesis.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const voiceOption = document.createElement('option');
    voiceOption.value = i;
    voiceOption.textContent = voices[i].name;
    voiceSelect.appendChild(voiceOption);
  }
}

function setGeorgianVoice() {
  const voices = window.speechSynthesis.getVoices();
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].lang === 'ka-GE') {
      speech.voice = voices[i];
      break;
    }
  }
}

window.speechSynthesis.onvoiceschanged = populateVoices;

listenButton.addEventListener('click', () => {
  if (!speech) {
    speech = new SpeechSynthesisUtterance();
    speech.lang = 'ka-GE'; // Set the language to Georgian
    setGeorgianVoice();
  }
  speech.text = textInput.value;

  // Adjust speech rate and pause length
  speech.rate = 0.9; // Set speech rate (0.1 - 10, default is 1)
  speech.pause = 200; // Set pause length in milliseconds (default is 0)

  window.speechSynthesis.speak(speech);
});
