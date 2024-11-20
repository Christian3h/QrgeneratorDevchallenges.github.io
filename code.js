

const botonCompartir = document.getElementById('botonCompartir')
const captura = document.getElementById('captura')
const descargar = document.getElementById('descargar')


document.querySelector("button").onclick = function() {
    const inputValor = document.getElementById('textQr').value
    sessionStorage.setItem("qrValue", inputValor);
    location.replace("Qr.html");
};



const qrValue = sessionStorage.getItem("qrValue");

if (qrValue) {
    new QRCode(document.getElementById("qrcode"), {
        text: qrValue,
        width: 170,
        height: 170,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    }); }else {
    alert("No QR value found in sessionStorage");
}

botonCompartir.addEventListener('click', () => {
    
    if(navigator.share){
        navigator.share({
            title: 'Compartir ejemplo',
            text: 'Este es un ejemplo de compartir usando la Web Share API.',
            url: 'https://ejemplo.com',
        })
        .then(() => console.log('Compartido correctamente.'))
        .catch((error) => console.error('Error al compartir:', error));
    } else {
        alert('Lo siento, tu navegador no soporta la funcionalidad de compartir.');
    }
})

descargar.addEventListener('click', () => {
    html2canvas(captura).then((canvas) => {
        const link = document.createElement('a');
                link.download = 'captura.png'; 
                link.href = canvas.toDataURL('image/png');
                link.click();
    })
})
