//formula = (codigoDaLetra + deslocamento)%tamDoDeslocamento
//(codigoDaLetra + 7)/26%
//((codigoDaLetraAsc - cod1aLetra +desloc)%tamDoAlfabeto) +cod1aLetra

export function caesarCipher(message, deslocamento) {
    let cipherMessage = "";
    for (let i = 0; i < message.length; i++) {
      let letter = message[i];
      // verifica se é uma letra maiúscula ou minúscula
      if (letter.match(/[a-z]/i)) {
        let codigoAscii = message.charCodeAt(i);
        // determina o deslocamento a partir do código ASCII da letra
        let novoCodigoAscii = codigoAscii + deslocamento;
        // ajusta o deslocamento se a letra ultrapassar o final do alfabeto
        if (letter.match(/[a-z]/) && novoCodigoAscii > 122) {
          novoCodigoAscii -= 26;
        } else if (letter.match(/[A-Z]/) && novoCodigoAscii > 90) {
          novoCodigoAscii -= 26;
        }
        // adiciona a letra cifrada à mensagem cifrada
        cipherMessage += String.fromCharCode(novoCodigoAscii);
      } else {
        // mantém os caracteres não-letra na mensagem cifrada
        cipherMessage += letter;
      }
    }
    return cipherMessage;
  }