// scripts.js

function encryptText() {
  const originalText = document.getElementById('originalText').value.trim();
  const encryptedText = caesarCipher(originalText, 3); // Cambia 3 por el número de posiciones de desplazamiento
  document.getElementById('resultText').value = encryptedText;
}

function decryptText() {
  const encryptedText = document.getElementById('resultText').value.trim();
  const decryptedText = caesarCipher(encryptedText, -3); // Cambia -3 por el número negativo de posiciones de desplazamiento
  document.getElementById('originalText').value = decryptedText;
}

function caesarCipher(text, shift) {
  return text.split('').map(char => {
    if (char.match(/[a-z]/)) {
      let code = char.charCodeAt(0);
      code = ((code - 97 + shift) % 26 + 26) % 26 + 97;
      return String.fromCharCode(code);
    } else {
      return char;
    }
  }).join('');
}
