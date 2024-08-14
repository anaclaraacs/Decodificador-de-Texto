function mostrarResultado(texto) {
    const resultImage = document.getElementById('resultImage');
    const outputText = document.getElementById('outputText');

    resultImage.style.display = 'none'; 
    outputText.style.display = 'block'; 
    outputText.innerText = texto; 
}

document.getElementById('encryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    
    if (!/^[a-z\s]+$/.test(inputText)) {
        alert("Só pode letras minúsculas e sem caracteres especiais!");
        return;
    }

    // Criptografar
    let encryptedText = inputText.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado(encryptedText); 
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    
    if (!/^[a-z\s]+$/.test(inputText)) {
        alert("Só pode letras minúsculas e sem caracteres especiais!");
        return;
    }

    // Descriptografar
    let decryptedText = inputText.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(decryptedText); 
});
