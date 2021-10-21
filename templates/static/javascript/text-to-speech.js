var synth = window.speechSynthesis;
var voices = synth.getVoices();
var utter = new SpeechSynthesisUtterance();
var ttsbtn = document.querySelector('#tts-btn');
utter.rate = 0.70;
utter.volume = 1;
utter.pitch = 1.3;
utter.lang = 'en';

/*
var voiceSelect = document.querySelector('select');

for (var i = 0; i < voices.length; i++) {
  var option = document.createElement('option');
  if (voices[i].lang.split('-')[0].toLowerCase() == 'en') {
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    option.value = i;
    voiceSelect.appendChild(option);
  }
}


document.querySelector('#voices').addEventListener('change', () => {
  utter.voice = voices[document.querySelector("#voices").value];
});
*/

function get_selected_text() {
  if (document.getSelection) {
    var text = document.getSelection();
    return text.toString();
  }
  return null;
}

function speech() {
  if (synth.paused) {
    synth.resume();
    ttsbtn.style.color = 'lightgreen';
  } else if (synth.speaking) {
    synth.cancel();
    ttsbtn.style.color = '';
  } else {
    var text = get_selected_text();
    if (text.length != 0) {
      utter.text = text;
      synth.speak(utter);
      ttsbtn.style.color = 'lightgreen';
    }
  }
}

if(navigator.vendor != 'Google Inc.') {
  ttsbtn.addEventListener('click', ()=>{
    speech();
  });

  ttsbtn.addEventListener('dblclick', ()=>{
    synth.cancel();
    ttsbtn.style.color = '';
  }); 
}

utter.addEventListener('end', (event)=>{
  ttsbtn.style.color = '';
});
