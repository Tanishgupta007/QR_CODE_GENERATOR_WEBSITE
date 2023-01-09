var qrcode = document.getElementById('qrcode');
var user_input = document.getElementById('input');
var gen_btn = document.getElementById('btn');
let btnDownload = document.querySelector('button');
let img = document.querySelector('img');

gen_btn.addEventListener("click",()=>{
var url = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user_input.value}`;
qrcode.src=url;
});


// Must use FileSaver.js 2.0.2 because 2.0.3 has issues.
btnDownload.addEventListener('click', () => {
    let imagePath = img.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});
function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}