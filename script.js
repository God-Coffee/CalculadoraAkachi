function converterTempo() {
    var inputTempo = document.getElementById('tempo');
    var tempoMinutos = parseFloat(inputTempo.value);
  
    if (isNaN(tempoMinutos) || tempoMinutos <= 0) {
      alert('Por favor, insira um valor válido para o tempo em minutos.');
      return;
    }
    var tempoConvertido = tempoMinutos * 5;
    if (tempoConvertido < 60){
        document.getElementById('resultado').textContent = `O tempo convertido é ${tempoConvertido} minutos.`;
    }
    else{
        
        tempoConvertido = tempoConvertido / 60;
        document.getElementById('resultado').textContent = `O tempo convertido é ${tempoConvertido.toFixed(0)} horas e ${(tempoConvertido % 60).toFixed(0)} minutos.`;
    }

  }