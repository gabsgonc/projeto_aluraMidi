function playSound(audioSelector) {
  const element = document.querySelector(audioSelector);

  if(element && element.localName === 'audio') {
      element.play();
  }
  else {
    console.log('Elemento não encontrado ou seletor inválido.');
  }
}

const keyList = document.querySelectorAll('.tecla');

for (let count = 0; count < keyList.length; count++) {

  const key = keyList[count];
  const instrument =  key.classList[1];
  const idAudio = `#som_${instrument}`;

  key.onclick = function(){
    playSound(idAudio);
  };

  key.onkeydown = function(e){

    console.log(e);

    if(e.code === 'Space' || e.code === 'Enter'){
      key.classList.add('ativa');
    };
  }

  key.onkeyup = function(){
    key.classList.remove('ativa');
  }
}

