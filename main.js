// console.log(document.body)
// document.body.style.background red;

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()

let show = document.getElementById('show');
let formSection = document.getElementById('formSection');
let send = document.getElementById('send');


show.onclick = function(){ 
    show.style.display = 'none';
    formSection.style.display = 'block';
}

 

// 1255345481:AAGRgV4dcns-LrG1_9_C8YtF0c7fSI_bl2M
// https://api.telegram.org/bot
// 


send.onclick = function(){
    let name = document.getElementById('name').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let message = document.getElementById('message').value;
    // console.log(name);
    // console.log(phoneNumber);
    // console.log(message);    
    let postInfo = new XMLHttpRequest();
    postInfo.open('get', `https://api.telegram.org/bot1255345481:AAGRgV4dcns-LrG1_9_C8YtF0c7fSI_bl2M/sendMessage?text= Name: ${name}%0APhone number: ${phoneNumber}%0AMessage: ${message}&chat_id=-461126982`, false);
    postInfo.send();
}
