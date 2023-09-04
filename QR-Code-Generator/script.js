const qrText = document.getElementById('qrtext');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');

const qrcontainer = document.querySelector('.qrbody');

let size = sizes.value;
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change', (e) => {
    size = e.target.value;
    isEmptyInput();

});

downloadBtn.addEventListener('click',(e)=>{
    let img = document.querySelector('.qrbody img');
   
    if(qrText.value.length > 0 ){
      
        if(img !== null){
            let imgAtrr = img.getAttribute('src');
            downloadBtn.setAttribute("href", img.getAttribute('src'))
        }
        else{
            downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL}`);
        }

    }
    else{
        alert("Plese Enter text or URL");
       
    }

   
});

function isEmptyInput() {
    // if(qrText.value.length > 0){
    //     generateQRCode();
    //  }
    //  else{
    //     alert("Enter the text or URL to generate QR Code");
    //  }
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate QR Code");
}

function generateQRCode() {
    qrcontainer.innerHTML = "";
    new QRCode(qrcontainer, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000"
    });
}

